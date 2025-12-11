import { motion } from "framer-motion";

const ContactsCard = ({ title, contact, image, onClick }) => {
  return (
    <motion.button
      className="w-full md:w-80 py-12 px-6 bg-[#3a3a3a] rounded-2xl flex flex-col items-center gap-8 shadow-lg hover:shadow-[#4DD0E1]/20 transition-all duration-300 border border-transparent hover:border-[#4DD0E1]/50 group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -10 }}
    >
      <div className="p-4 bg-[#2c2c2c] rounded-full group-hover:bg-[#4DD0E1]/10 transition-colors duration-300">
        <img className="size-16 group-hover:scale-110 transition-transform duration-300" src={image} alt={title} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#4DD0E1] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lg text-gray-400 group-hover:text-white transition-colors duration-300">{contact}</p>
      </div>
    </motion.button>
  );
};

export default ContactsCard;
