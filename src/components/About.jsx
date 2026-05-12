import { FaGraduationCap, FaRobot, FaCode, FaHeart } from 'react-icons/fa';
import profilePhoto from '../assets/portfolio-picture.png';

const highlights = [
    {
        icon: <FaGraduationCap />,
        title: "Education",
        text: "BS Software Engineering from Auburn University, an AI Engineering Certificate and a minor in Business, Engineering & Technology.",
    },
    {
        icon: <FaCode />,
        title: "Full-Stack Dev",
        text: "I enjoy building complete products end-to-end — from the database schema all the way to the UI — that solve real-world problems.",
    },
    {
        icon: <FaHeart />,
        title: "Beyond the Code",
        text: "When I'm not at a keyboard, I'm probably needlepointing, reading, or hunting down a new workout class.",
    },
    {
        icon: <FaRobot />,
        title: "AI & Research",
        text: "I've done research in federated learning for heterogeneous edge environments and love finding ways to apply ML to real-world problems.", 
    },
];

        

function About() {
    return (
        <section id="about" className="section about">
            <h2 className="section-title">About Me</h2>

            <div className="about-bio">
                <div className="about-avatar">
                    <img src={profilePhoto} alt="Claire Weber" className="about-avatar-img" />
                </div>
                <p className="about-text">
                    I'm a software engineer with a passion for building things that matter. I recently graduated from Auburn
                    University with a Bachelor of Software Engineering, along with a Certificate in AI Engineering and a minor in
                    Business, Engineering & Technology. I'm drawn to the intersection of AI and full-stack development — I love
                    the challenge of taking an idea from concept to a working product that real people can use. Whether it's
                    training a model, designing an API, or polishing a UI, I want to understand the whole system.
                </p>
            </div>

            <div className="about-cards">
                {highlights.map((h) => (
                    <div className="about-card" key={h.title}>
                        <div className="about-card-icon">{h.icon}</div>
                        <h3>{h.title}</h3>
                        <p>{h.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;
