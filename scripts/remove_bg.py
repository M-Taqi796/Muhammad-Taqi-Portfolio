#!/usr/bin/env python3
"""
Script to remove the white background from header portraits and generate transparent PNGs.
Designed specifically for Muhammad Taqi's portfolio header images.
"""

import os
import sys
import numpy as np
from PIL import Image
from scipy.ndimage import label, binary_dilation

def remove_white_background(
    input_path: str,
    output_path: str = None,
    bg_threshold: float = 246.0,
    edge_feather: int = 3,
    soft_threshold: float = 215.0
):
    """
    Removes white background using border-connected component analysis,
    smooth alpha matting, and edge de-fringing.
    """
    if not os.path.exists(input_path):
        print(f"Error: File not found at {input_path}")
        return False

    if output_path is None:
        base, _ = os.path.splitext(input_path)
        output_path = f"{base}.png"

    print(f"Processing: {input_path} -> {output_path}")

    # Load image
    img = Image.open(input_path).convert("RGB")
    arr = np.array(img).astype(np.float32)
    h, w, _ = arr.shape

    # Euclidean distance from pure white (255, 255, 255)
    dist_from_white = np.sqrt(np.sum((255.0 - arr) ** 2, axis=2))
    
    # Strictly white/near-white pixel condition
    tolerance = np.sqrt(3 * (255.0 - bg_threshold) ** 2)
    is_white = dist_from_white < tolerance

    # Seed the outer boundary (top, left, and right borders touching background)
    seed_mask = np.zeros((h, w), dtype=bool)
    seed_mask[0, :] = is_white[0, :]
    seed_mask[:int(h * 0.65), 0] = is_white[:int(h * 0.65), 0]
    seed_mask[:int(h * 0.65), -1] = is_white[:int(h * 0.65), -1]

    # Connected components
    labeled, _ = label(is_white)
    touching_labels = np.unique(labeled[seed_mask])
    touching_labels = touching_labels[touching_labels > 0]

    # True outer background mask (does not touch isolated white regions inside clothes/body)
    bg_mask = np.isin(labeled, touching_labels)

    # Initialize alpha (255 = fully opaque)
    alpha = np.ones((h, w), dtype=np.float32) * 255.0
    alpha[bg_mask] = 0.0

    # Smooth feathering & de-fringing around subject edges
    if edge_feather > 0:
        edge_zone = binary_dilation(bg_mask, iterations=edge_feather) & (~bg_mask)
        for y, x in zip(*np.where(edge_zone)):
            brightness = arr[y, x].mean()
            if brightness > soft_threshold:
                # Soft alpha calculation
                a = max(0.0, min(1.0, (255.0 - brightness) / (255.0 - soft_threshold)))
                alpha[y, x] = a * 255.0
                
                # Un-premultiply white background to remove white halo/fringe
                if a > 0.04:
                    for c in range(3):
                        unpremul = (arr[y, x, c] - (1.0 - a) * 255.0) / a
                        arr[y, x, c] = np.clip(unpremul, 0.0, 255.0)

    # Build RGBA array
    rgba = np.dstack([arr.astype(np.uint8), alpha.astype(np.uint8)])
    result = Image.fromarray(rgba)
    
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    result.save(output_path, "PNG")
    print(f"✓ Successfully saved transparent image: {output_path}")
    return True

def main():
    default_images = [
        "public/Images/Header/MuhammadTaqi1.jpeg",
        "public/Images/Header/MuhammadTaqi2.jpg",
    ]

    images_to_process = sys.argv[1:] if len(sys.argv) > 1 else default_images

    for img_path in images_to_process:
        remove_white_background(img_path)

if __name__ == "__main__":
    main()
