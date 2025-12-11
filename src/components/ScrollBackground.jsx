import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollBackground = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <div ref={ref} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Circle 1 - Top Left */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4DD0E1] opacity-5 blur-[100px]"
            />

            {/* Circle 2 - Bottom Right */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FFD166] opacity-5 blur-[120px]"
            />

            {/* Floating Shapes */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
                className="absolute top-[20%] right-[10%] w-20 h-20 border-4 border-white/5 rounded-full"
            />

            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
                className="absolute bottom-[30%] left-[5%] w-32 h-32 border-4 border-white/5 rotate-45"
            />
        </div>
    );
};

export default ScrollBackground;
