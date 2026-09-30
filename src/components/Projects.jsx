import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsData from "./ProjectsData.js";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  "All",
  "UI/UX Design",
  "Web Development",
  "Case Studies",
  "Mobile App",
];

const matchesFilter = (project, filter) => {
  if (filter === "All") return true;
  if (filter === "Case Studies") return Boolean(project.caseStudyPath);

  const categories = Array.isArray(project.category)
    ? project.category
    : project.category
    ? [project.category]
    : [];

  const target = filter.toLowerCase().trim();

  return categories.some((cat) => {
    const c = cat.toLowerCase().trim();
    if (target === "ui/ux design") {
      return c.includes("ui/ux") || c.includes("design");
    }
    if (target === "web development") {
      return c.includes("web") || c.includes("development");
    }
    if (target === "mobile app") {
      return c.includes("mobile") || c.includes("app");
    }
    return c === target;
  });
};

const matchesSearch = (project, query) => {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  return project.title.toLowerCase().includes(q);
};

const Projects = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Counts for each filter tab
  const filterCounts = useMemo(() => {
    const counts = {};
    FILTERS.forEach((filter) => {
      counts[filter] = ProjectsData.filter((p) => matchesFilter(p, filter)).length;
    });
    return counts;
  }, []);

  // Filtered and searched projects
  const filteredProjects = useMemo(() => {
    return ProjectsData.filter(
      (project) =>
        matchesFilter(project, selectedFilter) &&
        matchesSearch(project, searchQuery)
    );
  }, [selectedFilter, searchQuery]);

  const handleCaseStudy = (path) => {
    if (!path) return;
    window.open(path, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedFilter("All");
  };

  return (
    <section className="flex flex-col gap-10 mb-24 items-center w-full max-sm:mb-12 max-sm:gap-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span
          className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-3"
          style={{
            background: "rgba(77,208,225,0.12)",
            color: "#4DD0E1",
            border: "1px solid rgba(77,208,225,0.3)",
          }}
        >
          Selected Works
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Featured Projects
        </h2>
      </motion.div>

      {/* Controls: Search Bar & Filters */}
      <div className="flex flex-col items-center gap-6 w-full px-6 md:px-12 max-w-4xl">
        {/* Search Bar */}
        <div className="relative w-full max-w-xl group">
          <div
            className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4DD0E1] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-[#1c1c1e] text-white placeholder-gray-500 text-sm font-medium border border-white/10 outline-none transition-all duration-300 focus:border-[#4DD0E1] focus:ring-2 focus:ring-[#4DD0E1]/20 shadow-lg shadow-black/20"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((filter) => {
            const isActive = selectedFilter === filter;
            const count = filterCounts[filter] ?? 0;

            return (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[#4DD0E1] text-[#0e1a1b] font-bold shadow-[0_0_18px_rgba(77,208,225,0.4)]"
                    : "bg-white/[0.04] text-gray-300 border border-white/10 hover:border-[#4DD0E1]/40 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-[#0e1a1b]/20 text-[#0e1a1b]"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Status / Showing Count */}
        <div className="flex items-center justify-between w-full max-w-xl px-2 text-xs text-gray-400">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of {ProjectsData.length} projects
          </span>
          {(searchQuery || selectedFilter !== "All") && (
            <button
              onClick={handleReset}
              className="text-[#4DD0E1] hover:underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 md:px-16 lg:px-24 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  category={project.category}
                  link={project.link}
                  onCaseStudy={
                    project.caseStudyPath
                      ? () => handleCaseStudy(project.caseStudyPath)
                      : null
                  }
                  hasCaseStudy={!!project.caseStudyPath}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-16 px-6 text-center max-w-md mx-auto"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-[#4DD0E1]"
            style={{
              background: "rgba(77,208,225,0.08)",
              border: "1px solid rgba(77,208,225,0.25)",
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {searchQuery
              ? `No projects matched "${searchQuery}" under ${selectedFilter}.`
              : `No projects currently in ${selectedFilter}.`}
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0e1a1b] transition-all duration-300 hover:opacity-90 active:scale-95 shadow-md shadow-[#4DD0E1]/20"
            style={{ background: "#4DD0E1" }}
          >
            Reset Filters & Search
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;

