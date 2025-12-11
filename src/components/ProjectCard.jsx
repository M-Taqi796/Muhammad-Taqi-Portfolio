import { motion } from "framer-motion";

const ProjectCard = ({ title, image, category, onClick }) => {
    return (
        <motion.div
            className="group relative overflow-hidden rounded-2xl bg-[#3a3a3a] shadow-lg cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
        >
            <div className="h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <p className="text-[#4DD0E1] text-sm font-medium mb-2 uppercase tracking-wider">{category}</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#4DD0E1] transition-colors duration-300">{title}</h3>
            </div>
        </motion.div>
    )
}

export default ProjectCard