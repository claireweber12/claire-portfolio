
function ProjectCard({title, category, description, skills, link}) {
    return (
        <article className="project-card">
            <p className = "project-category">{category}</p>

            <h3>{title}</h3>

            <p>{description}</p>

            <div className="project-skills">
                {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>

            <a href={link} className="project-link">
                View Project
            </a>
        </article>
    );
}

export default ProjectCard;