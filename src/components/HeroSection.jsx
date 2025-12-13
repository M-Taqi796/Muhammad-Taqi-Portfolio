import { motion, useScroll, useTransform } from "framer-motion";
import Taqi from "../assets/hero/Taqi.png";
import PrimaryBtn from "./PrimaryBtn";
import SecondryBtn from "./SecondryBtn";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="mb-20 px-6 md:px-16 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 overflow-hidden min-h-[80vh]">
      <motion.div
        className="flex flex-col gap-8 lg:w-1/2 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-medium">Hello! I am</h2>
          <h1 className="font-Nura text-4xl md:text-7xl font-bold text-[#FFD166]">
            Muhammad
            Taqi
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            A Software Enginner & <br />
            Ui/Ux Designer
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mt-4 mx-auto lg:mx-0">
            I'm a passionate software engineer and designer crafting scalable software and intuitive user interfaces.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-4 w-full">
          <PrimaryBtn />
          <SecondryBtn />
        </div>

        <div className="flex gap-12 mt-8 justify-center lg:justify-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">2+</h3>
            <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">20+</h3>
            <p className="text-gray-400 text-sm md:text-base">Projects Delivered</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-end relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-[#4DD0E1] blur-[100px] opacity-20 rounded-full"></div>
        <img
          className="relative z-10 w-64 md:w-80 lg:w-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          src={Taqi}
          alt="Muhammad Taqi"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
