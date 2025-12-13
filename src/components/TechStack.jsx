import { motion } from "framer-motion";
import Figma from "../assets/hero/figma.svg";
import XD from "../assets/hero/xd.svg";
import ReactIcon from "../assets/hero/react.svg";
import Next from "../assets/hero/next.svg";
import Tailwind from "../assets/hero/tailwind.svg";
import Scss from "../assets/hero/scss.svg";

const technologies = [
    { name: "Figma", icon: Figma },
    { name: "Adobe XD", icon: XD },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: Next },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "SCSS", icon: Scss },
];

const TechStack = () => {
    // Create 4 repetitions of the list to ensure seamless looping without gaps
    const seamlessTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];

    return (
        <div className="w-full overflow-hidden py-10 bg-transparent">
            <motion.div
                className="flex items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 30, // Slower duration for lengthier list
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {seamlessTechnologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 min-w-[100px] pr-16 box-content">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-12 w-12 md:h-16 md:w-16 object-contain brightness-0 invert"
                        />
                        <span className="text-gray-400 text-sm md:text-base whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;
