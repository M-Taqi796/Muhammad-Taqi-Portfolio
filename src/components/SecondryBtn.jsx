import { motion } from "framer-motion";

const SecondryBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.usercontent.google.com/u/0/uc?id=1UDbhLa8SDynnlN-sV4LpuyUgUy9tNCdI&export=download";
    link.download = "Muhammad_Taqi_Resume.pdf";
    link.click();
  };
  return (
    <motion.button
      className="w-full md:w-56 h-14 border-2 border-[#4DD0E1] text-[#4DD0E1] text-xl font-bold rounded-[0.5rem] shadow-lg hover:shadow-[#4DD0E1]/30 hover:bg-[#4DD0E1]/10 transition-all duration-300 relative overflow-hidden group"
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Download CV</span>
    </motion.button>
  );
};

export default SecondryBtn;
