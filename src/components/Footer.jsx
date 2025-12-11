import Taqi from "../assets/footer/taqi.svg";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="text-white flex flex-col border-t border-white/10 py-12 gap-12 px-8 md:px-16 lg:px-24 bg-[#2c2c2c]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFD166]">Let's work together</h1>
          <p className="text-gray-400 max-w-md">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-24 h-24 md:w-32 md:h-32 object-contain" src={Taqi} alt="Muhammad Taqi" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-8 md:gap-16 text-lg md:text-xl font-medium"
      >
        <a href="https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you." target="_blank" rel="noopener noreferrer" className="hover:text-[#4DD0E1] transition-colors duration-300">WhatsApp</a>
        <a href="https://www.instagram.com/direct/t/uiux.taqi" target="_blank" rel="noopener noreferrer" className="hover:text-[#4DD0E1] transition-colors duration-300">Instagram</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itstaqi2919@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4DD0E1] transition-colors duration-300">Email</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-white/5 pt-8 text-center"
      >
        <p className="text-sm text-gray-500">
          © 2025 Muhammad Taqi. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
