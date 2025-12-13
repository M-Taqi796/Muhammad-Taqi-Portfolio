import { Link } from "react-router-dom";
import CallIcon from "../assets/navBar/CallIcon.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-col py-4 px-8 md:px-16 lg:px-24 backdrop-blur-md bg-[#2c2c2c]/80 border-b border-white/10 mb-10 transition-all duration-300">
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <h1 className="font-Nura text-2xl font-bold max-sm:text-[1rem]">
            <span className="text-transparent [-webkit-text-stroke:1px_white]">
              Muhammad
            </span>{" "}
            Taqi
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-[1rem] items-center">
          <Link
            className="border border-white/20 px-6 py-2 flex gap-3 items-center rounded-[0.5rem] hover:bg-white hover:text-[#2c2c2c] transition-all duration-300 group"
            to="/contact"
          >
            <img src={CallIcon} alt="" className="group-hover:invert transition-all duration-300" />
            Contact
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-8 h-0.5 bg-white block"
          ></motion.span>
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-8 h-0.5 bg-white block"
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-8 h-0.5 bg-white block"
          ></motion.span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col items-center gap-6 overflow-hidden w-full"
          >
            <div className="py-8 flex flex-col items-center gap-6 w-full border-t border-white/10 mt-4">
              <Link
                className="border border-white/20 px-6 py-2 flex gap-3 items-center rounded-full hover:bg-white hover:text-[#2c2c2c] transition-all duration-300 group w-full justify-center max-w-xs"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                <img src={CallIcon} alt="" className="group-hover:invert transition-all duration-300" />
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
