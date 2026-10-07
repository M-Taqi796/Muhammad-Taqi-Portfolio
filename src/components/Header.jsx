import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import SecondryBtn from "./SecondryBtn";

const Header = () => {
    const containerRef = useRef(null);
    const [split, setSplit] = useState(50); // percentage of Designer visible (0 to 100)
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchOrMobile, setIsTouchOrMobile] = useState(false);

    // Detect non-pointing / touch devices or mobile viewports
    useEffect(() => {
        const checkTouchOrMobile = () => {
            const hasTouchMedia = window.matchMedia("(hover: none), (pointer: coarse)").matches;
            const hasTouchPoints = typeof navigator !== "undefined" && navigator.maxTouchPoints > 0;
            const hasTouchEvents = typeof window !== "undefined" && "ontouchstart" in window;
            const isMobileWidth = window.innerWidth < 1024; // Below lg breakpoint

            setIsTouchOrMobile(hasTouchMedia || (hasTouchPoints && hasTouchEvents) || isMobileWidth);
        };

        checkTouchOrMobile();

        const mql = window.matchMedia("(hover: none), (pointer: coarse)");
        const handler = () => checkTouchOrMobile();
        if (mql.addEventListener) {
            mql.addEventListener("change", handler);
        }
        window.addEventListener("resize", checkTouchOrMobile);

        return () => {
            if (mql.removeEventListener) {
                mql.removeEventListener("change", handler);
            }
            window.removeEventListener("resize", checkTouchOrMobile);
        };
    }, []);

    // Calculate mouse position relative to container (only on pointer/desktop devices)
    const handleMouseMove = useCallback((e) => {
        if (isTouchOrMobile || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, x / rect.width));

        // When mouse is on the left (ratio < 0.5), Designer area increases (split -> 100%)
        // When mouse is on the right (ratio > 0.5), Coder area increases (split -> 0%)
        // At center (ratio = 0.5), split = 50%
        const newSplit = (1 - ratio) * 100;
        setSplit(newSplit);
        setIsHovering(true);
    }, [isTouchOrMobile]);

    const handleMouseLeave = useCallback(() => {
        if (isTouchOrMobile) return;
        setSplit(50);
        setIsHovering(false);
    }, [isTouchOrMobile]);

    // Opacities for the text on each side based on cursor position
    const designerOpacity = isTouchOrMobile
        ? 1
        : (split >= 50 ? 1 : Math.max(0.35, 1 - ((50 - split) / 50) * 0.65));
    const coderOpacity = isTouchOrMobile
        ? 1
        : (split <= 50 ? 1 : Math.max(0.35, 1 - ((split - 50) / 50) * 0.65));

    // On touch/mobile: always keep details and buttons visible
    // On pointer/desktop: toggle dynamically on hover/split
    const showDesignerDetails = isTouchOrMobile || (isHovering && split > 50);
    const showCoderDetails = isTouchOrMobile || (isHovering && split < 50);

    const transitionStyle = isTouchOrMobile
        ? "none"
        : (isHovering
            ? "clip-path 0.08s ease-out, left 0.08s ease-out, opacity 0.15s ease-out"
            : "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1), left 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out");

    return (
        <header
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full text-black overflow-hidden select-none pt-2 sm:pt-4 md:pt-6 pb-14 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-20 transition-colors duration-300"
            style={{ cursor: "default" }}
        >
            {/* 1st (Top): Muhammad Taqi */}
            <div className="w-full flex justify-center mb-6 sm:mb-10 md:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-Nura text-center text-[#FFD166] tracking-tight leading-none px-4">
                    Muhammad Taqi
                </h1>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-12 relative z-10">

                {/* LEFT SIDE: DESIGNER (Mobile: 5th item, Desktop: Left side) */}
                <div
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-opacity duration-200 self-stretch justify-center order-2 lg:order-1"
                    style={{
                        opacity: designerOpacity,
                        transition: transitionStyle,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start w-full"
                    >
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
                            style={{ letterSpacing: "-0.03em" }}
                        >
                            DESIGNER
                        </h1>
                        <AnimatePresence>
                            {showDesignerDetails && (
                                <motion.div
                                    key="designer-content"
                                    initial={isTouchOrMobile ? false : { opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="overflow-hidden flex flex-col items-center lg:items-start w-full"
                                >
                                    <div className="pt-4 flex flex-col items-center lg:items-start w-full">
                                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-sm font-normal mb-6">
                                            UI/UX Designer specialised in web and mobile products, transforming complex workflows into clean, interactive Figma designs.
                                        </p>
                                        <SecondryBtn
                                            href="/Documents/MuhammadTaqiUiUxDesigner.pdf"
                                            download="MuhammadTaqiUiUxDesigner.pdf"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* CENTER: SPLIT FACE PORTRAIT & ACTIONS (Mobile: 2nd, 3rd, 4th, Desktop: Center) */}
                <div className="flex flex-col items-center gap-8 flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto">
                    {/* 2nd: Picture */}
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

                    {/* 3rd: Hire Me & 4th: Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center gap-7 w-full"
                    >
                        {/* 3rd: Hire Me Button */}
                        <div className="w-full max-w-md flex justify-center">
                            <PrimaryBtn className="w-full" />
                        </div>

                        {/* 4th: Stats ("2+ Years of experience, 20+ Projects Delivered") */}
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

                {/* RIGHT SIDE: CODER (Mobile: 6th item, Desktop: Right side) */}
                <div
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-opacity duration-200 self-stretch justify-center order-3 lg:order-3"
                    style={{
                        opacity: coderOpacity,
                        transition: transitionStyle,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start w-full"
                    >
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
                            style={{ letterSpacing: "-0.03em" }}
                        >
                            &lt;CODER&gt;
                        </h1>
                        <AnimatePresence>
                            {showCoderDetails && (
                                <motion.div
                                    key="coder-content"
                                    initial={isTouchOrMobile ? false : { opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="overflow-hidden flex flex-col items-center lg:items-start w-full"
                                >
                                    <div className="pt-4 flex flex-col items-center lg:items-start w-full">
                                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-sm font-normal mb-6">
                                            Software Engineer specialized in front-end development, crafting responsive, high-performance web and mobile apps.
                                        </p>
                                        <SecondryBtn
                                            href="/Documents/Muhammad Taqi Web Developer.pdf"
                                            download="Muhammad Taqi Web Developer.pdf"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>
        </header>
    );
};

export default Header;

