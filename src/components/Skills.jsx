
function Skills(){
    const skillGroups =[
        {
            title: "Languages",
            skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
        },
        {
            title: "Frameworks & Tools",
            skills: ["React", "Node.js", "Vite", "Git", "Github", "Visual Studio", "Visual Studio Code", "Linux"],

        },
        {
            title: "AI & Data",
            skills: ["Machine Learning", "Federated Learning", "Computer Vision", "CNNs", "Linear Regression", "Logistic Regression", "Pytorch", "Neural Networks"],
        },
        {
            title: "Software Engineering",
            skills: ["Agile/Scrum", "API Integration", "Testing", "Debugging", "Object-Oriented Design"],
        },
    ];

    return(
        <section id="skills" className="section skills">
            <h2>Technical Skills</h2>

            <p className="section-intro">
                Tools and technologies I have used through coursework, internships,
                research, and project work.
            </p>

            <div className="skills-grid">
                {skillGroups.map((group)=> (
                    <div className="skill-group" key={group.title}>
                        <h3>{group.title}</h3>

                        <div className="skills-list">
                            {group.skills.map((skill)=>(
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;