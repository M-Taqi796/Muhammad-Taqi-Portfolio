import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PrimaryBtn = () => {
  const navigate = useNavigate();
  return (
    <motion.button
      className="w-56 h-14 bg-gradient-to-r from-[#4DD0E1] to-[#00BCD4] text-[#2C2C2C] text-xl font-bold rounded-full shadow-lg hover:shadow-[#4DD0E1]/50 transition-all duration-300 relative overflow-hidden group"
      onClick={() => { navigate("/contact") }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Hire Me</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
    </motion.button>
  );
};

export default PrimaryBtn
