import { motion } from "framer-motion";

const ProjectCard = ({ title, image, category, link, onCaseStudy, hasCaseStudy }) => {
    const tags = Array.isArray(category) ? category : (category ? [category] : []);

    const handleVisit = (e) => {
        e?.stopPropagation();
        if (link && link !== "link") {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    const handleCaseStudy = (e) => {
        e?.stopPropagation();
        if (onCaseStudy) onCaseStudy();
    };

    return (
        <motion.div
            className="group relative flex flex-col rounded-2xl bg-[#1c1c1e] border border-white/10 shadow-2xl overflow-hidden"
            whileHover={{ y: -6, boxShadow: "0 32px 64px -12px rgba(77,208,225,0.15)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            {/* Image */}
            <div className="w-full aspect-square overflow-hidden bg-[#111]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-0.5 text-[11px] font-semibold uppercase tracking-widest rounded-full"
                            style={{
                                background: "rgba(77,208,225,0.10)",
                                color: "#4DD0E1",
                                border: "1px solid rgba(77,208,225,0.25)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-[1.15rem] font-bold text-white leading-snug">
                    {title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-white/8 mt-auto mb-1" />

                {/* Buttons — Case Study left, Visit right */}
                <div className="grid grid-cols-2 gap-2.5">
                    {/* Case Study — left */}
                    <motion.button
                        type="button"
                        onClick={hasCaseStudy ? handleCaseStudy : undefined}
                        whileHover={hasCaseStudy ? { scale: 1.03 } : {}}
                        whileTap={hasCaseStudy ? { scale: 0.97 } : {}}
                        title={hasCaseStudy ? "Read Case Study" : "Coming Soon"}
                        className="relative flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-[0.83rem] overflow-hidden transition-colors duration-300"
                        style={{
                            background: hasCaseStudy ? "rgba(77,208,225,0.06)" : "rgba(255,255,255,0.02)",
                            border: hasCaseStudy ? "1px solid rgba(77,208,225,0.3)" : "1px solid rgba(255,255,255,0.07)",
                            color: hasCaseStudy ? "#4DD0E1" : "rgba(255,255,255,0.2)",
                            cursor: hasCaseStudy ? "pointer" : "not-allowed",
                        }}
                    >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{hasCaseStudy ? "Case Study" : "Coming Soon"}</span>
                    </motion.button>

                    {/* Visit — right, cyan border */}
                    <motion.button
                        type="button"
                        onClick={handleVisit}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-[0.83rem] text-[#4DD0E1] overflow-hidden transition-colors duration-300 hover:bg-[#4DD0E1]/8"
                        style={{
                            background: "transparent",
                            border: "1.5px solid #4DD0E1",
                        }}
                    >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Visit</span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;