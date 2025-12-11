import { motion } from "framer-motion";

const ServicesCard = ({ text, image }) => {
    return (
        <motion.div
            className="w-full md:w-80 py-12 px-8 bg-[#3a3a3a] rounded-2xl flex flex-col items-center gap-8 shadow-lg hover:shadow-[#4DD0E1]/20 transition-all duration-300 border border-transparent hover:border-[#4DD0E1]/50 group"
            whileHover={{ y: -10 }}
        >
            <div className="p-4 bg-[#2c2c2c] rounded-full group-hover:bg-[#4DD0E1]/10 transition-colors duration-300">
                <img className="size-16 group-hover:scale-110 transition-transform duration-300" src={image} alt={text} />
            </div>
            <h3 className="text-2xl font-bold text-center group-hover:text-[#4DD0E1] transition-colors duration-300">{text}</h3>
        </motion.div>
    );
}

export default ServicesCard