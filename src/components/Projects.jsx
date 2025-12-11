import ProjectsData from "./ProjectsData.js";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col gap-12 mb-20 items-center max-sm:mb-10 max-sm:gap-6">
      <h2 className="text-5xl text-center max-sm:text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 md:px-16 lg:px-24 w-full">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            category={project.category}
            onClick={() => window.open(project.link, "_blank")}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
