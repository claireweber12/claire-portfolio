import ProjectCard from "./projectCard";
import { projects } from "../data/projects";

function Projects(){
    return (
        <section id="projects" className="section projects">
            <h2>Featured Projects</h2>

            <p className="section-intro">
                A few projects that represent my interests in software 
                engineering, AI, and building technology with real-world purpose.
            </p>

            <div className="project-grid">
                {projects.map((project)=>(
                    <ProjectCard
                    key={project.title}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    skills={project.skills}
                    link={project.link}
                    />
                ))}
            </div>

        </section>
    );
}

export default Projects;