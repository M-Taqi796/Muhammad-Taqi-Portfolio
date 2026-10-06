import { motion } from "framer-motion";

const SecondryBtn = ({
  text = "Download CV",
  href = "/Documents/MuhammadTaqiUiUxDesigner.pdf",
  download = "MuhammadTaqiUiUxDesigner.pdf",
  className = "w-full md:w-56",
  onClick,
}) => {
  const handleDownload = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    const link = document.createElement("a");
    link.href = href;
    link.download = download;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      className={`h-14 border-2 border-[#4DD0E1] text-[#4DD0E1] text-xl font-bold rounded-[0.5rem] shadow-lg hover:shadow-[#4DD0E1]/30 hover:bg-[#4DD0E1]/10 transition-all duration-300 relative overflow-hidden group ${className}`}
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default SecondryBtn;

