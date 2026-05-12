
function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <p className="eyebrow">Software Engineering · AI · Full-Stack Development</p>

                <h1>Hi, I'm Claire Weber</h1>

                <p className="hero-description">
                    I recently graduated from Auburn University with a Bachelors of Software Engineering and a minor in Business, Engineering, and Technology.
                    I build full stack applications and AI powered tools that solve real problems.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="button primary-button">
                        View My Work
                    </a>

                    <a href="/Claire-Weber-Resume.pdf" className="button secondary-button">
                        Resume 
                    </a>
                </div>
            </div>

                <div className="hero-card-stack">
                    <div className="mini-card featured">
                        <span>Currently Building</span>
                        <h3>Threaded</h3>
                        <p>A needlepoint project tracker built with React + Supabase</p>
                    </div>

                    <div className='mini-card'>
                        <span>Research</span>
                        <h3>HAEF</h3>
                        <p>Federated learning for heterogeneous edge environments</p>
                    </div>

                    <div className="mini-card">
                        <span>Product + AI</span>
                        <h3>AquaGuard</h3>
                        <p>AI-powered pool safety concept using underwater detection</p>
                    </div>
                </div>
        </section>
    )
}

export default Hero;