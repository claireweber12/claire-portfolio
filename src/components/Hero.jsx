
function Hero(){
    return(
        <section className="hero">
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
        </section>
    )
}

export default Hero;