

function ProjectCard({project, isReversed}) {
    return (
        <article className={`work-card ${isReversed ? "reverse" : ""}`}>
            <div className="work-card-content">
                <p className = "work-label">{project.category}</p>

                <h3>{project.title}</h3>

                <p className='work-description'>{project.description}</p>

                <div className="work-tags">
                    {project.tech.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                </div>
                <div className="work-links">
                {project.caseStudy && project.caseStudy !== "#" && (
                    <a href={project.caseStudy} className="text-link">
                    View Case Study
                    </a>
                )}

                {project.demo && project.demo !== "#" && (
                    <a href={project.demo} className="text-link" target="_blank" rel="noreferrer">
                    Live Demo
                    </a>
                )}

                {project.github && project.github !== "#" && (
                    <a href={project.github} className="text-link" target="_blank" rel="noreferrer">
                    GitHub
                    </a>
                )}
                </div>
            </div>

            <div className="work-preview">
                <div className="preview-window">
                    <div className="preview-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="preview-body">
                        {project.img === '' && (
                            <div className="preview-image-placeholder"></div>
                        )}
                        {project.img !== '' && (
                            <img src={project.img} alt="Project Image" className="preview-image-image" />
                        )}
                        <div className="preview-line long"></div>
                        <div className="preview-line"></div>
                        <div className='preview-pill-row'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;