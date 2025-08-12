import ProjectCard from "./ProjectCard";
import TeraOnic from "../assets/projects/TeraOnicMockup.webp";

const design = "Web Design"
const dev = "Web Dev"

const Projects = () => {
    return (
        <section className="flex flex-col gap-12 mb-20">
            <h2 className="text-5xl text-center">Projects</h2>
            <div className="flex flex-wrap gap-1 ">
                <ProjectCard image={TeraOnic} title="TeraOnic Web Development" category={dev}/>
                <ProjectCard image={TeraOnic} title="TeraOnic Web Design" category={design}/>
                <ProjectCard image={TeraOnic} title="TeraOnic Web Design" category={design}/>
                <ProjectCard image={TeraOnic} title="TeraOnic Web Design" category={design}/>
                <ProjectCard image={TeraOnic} title="TeraOnic Web Design" category={design}/>
                <ProjectCard image={TeraOnic} title="TeraOnic Web Design" category={design}/>
            </div>
        </section>
    );
}

export default Projects