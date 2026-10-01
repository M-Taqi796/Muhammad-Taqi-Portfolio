import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import SecondryBtn from "./SecondryBtn";

const Header = () => {
    const containerRef = useRef(null);
    const [split, setSplit] = useState(50); // percentage of Designer visible (0 to 100)
    const [isHovering, setIsHovering] = useState(false);

    // Calculate mouse position relative to container
    const handleMouseMove = useCallback((e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, x / rect.width));

        // When mouse is on the left (ratio < 0.5), Designer area increases (split -> 100%)
        // When mouse is on the right (ratio > 0.5), Coder area increases (split -> 0%)
        // At center (ratio = 0.5), split = 50%
        const newSplit = (1 - ratio) * 100;
        setSplit(newSplit);
        setIsHovering(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setSplit(50);
        setIsHovering(false);
    }, []);

    // Touch support for mobile / tablets
    const handleTouchMove = useCallback((e) => {
        if (!containerRef.current || !e.touches[0]) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, x / rect.width));
        const newSplit = (1 - ratio) * 100;
        setSplit(newSplit);
        setIsHovering(true);
    }, []);

    const handleTouchEnd = useCallback(() => {
        setSplit(50);
        setIsHovering(false);
    }, []);

    // Opacities for the text on each side based on cursor position
    // When split is 50%, both are 1.0
    // When split > 50% (Designer dominant), Coder text dims
    // When split < 50% (Coder dominant), Designer text dims
    const designerOpacity = split >= 50 ? 1 : Math.max(0.35, 1 - ((50 - split) / 50) * 0.65);
    const coderOpacity = split <= 50 ? 1 : Math.max(0.35, 1 - ((split - 50) / 50) * 0.65);

    const transitionStyle = isHovering
        ? "clip-path 0.08s ease-out, left 0.08s ease-out, opacity 0.15s ease-out"
        : "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1), left 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out";

    return (
        <header
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full text-black overflow-hidden select-none pt-2 sm:pt-4 md:pt-6 pb-14 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20 transition-colors duration-300"
            style={{ cursor: "default" }}
        >
            <div className="w-full flex justify-center mb-6 sm:mb-10 md:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-Nura text-center text-[#FFD166] tracking-tight leading-none px-4">
                    Muhammad Taqi
                </h1>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">

                {/* LEFT SIDE: DESIGNER */}
                <div
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-opacity duration-200"
                    style={{
                        opacity: designerOpacity,
                        transition: transitionStyle,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4"
                            style={{ letterSpacing: "-0.03em" }}
                        >
                            DESIGNER
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-sm font-normal">
                            UI/UX Designer specialised in web and mobile products, transforming complex workflows into clean, interactive Figma designs.
                        </p>
                    </motion.div>
                </div>

                {/* CENTER: SPLIT FACE PORTRAIT & ACTIONS */}
                <div className="flex flex-col items-center gap-8 flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="relative w-[290px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[520px] aspect-[1071/992] overflow-hidden"
                    >
                        {/* Base Layer: CODER (Right side) */}
                        <img
                            src="/Images/Header/MuhammadTaqi2.png"
                            alt="Muhammad Taqi - Coder"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                            loading="eager"
                        />

                        {/* Top Layer: DESIGNER (Left side with dynamic clip-path) */}
                        <div
                            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
                            style={{
                                clipPath: `inset(0 ${100 - split}% 0 0)`,
                                transition: isHovering
                                    ? "clip-path 0.08s ease-out"
                                    : "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        >
                            <img
                                src="/Images/Header/MuhammadTaqi1.png"
                                alt="Muhammad Taqi - Designer"
                                className="w-full h-full object-cover pointer-events-none select-none"
                                loading="eager"
                            />
                        </div>

                        {/* Dividing Line */}
                        <div
                            className="absolute top-0 bottom-0 pointer-events-none z-20"
                            style={{
                                left: `${split}%`,
                                width: "2px",
                                background: "rgba(255, 255, 255, 0.4)",
                                boxShadow: "0 0 10px rgba(77, 208, 225, 0.5)",
                                transition: isHovering
                                    ? "left 0.08s ease-out"
                                    : "left 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        />
                    </motion.div>

                    {/* CTA Buttons & Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center gap-7 w-full"
                    >
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-md">
                            <PrimaryBtn />
                            <SecondryBtn />
                        </div>

                        {/* Stats */}
                        <div className="flex gap-12 sm:gap-16 items-center justify-center text-center">
                            <div className="flex flex-col items-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">2+</h3>
                                <p className="text-gray-400 text-sm md:text-base mt-0.5">Years Experience</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">20+</h3>
                                <p className="text-gray-400 text-sm md:text-base mt-0.5">Projects Delivered</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: CODER */}
                <div
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-opacity duration-200"
                    style={{
                        opacity: coderOpacity,
                        transition: transitionStyle,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4"
                            style={{ letterSpacing: "-0.03em" }}
                        >
                            &lt;CODER&gt;
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-sm font-normal">
                            Software Engineer specialized in front-end development, crafting responsive, high-performance web and mobile apps.
                        </p>
                    </motion.div>
                </div>

            </div>
        </header>
    );
};

export default Header;
