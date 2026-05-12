import { projects } from "../data/projects";
import ProjectCard from "./projectCard";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-intro">
          A collection of projects where I’ve explored full-stack development,
          AI, research, and product-focused problem solving.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;