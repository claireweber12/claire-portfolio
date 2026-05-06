
function Navbar() {
    return (
        <header className="site-header">
            <nav className="navbar">
                <a href="#" className="logo">
                    Claire Weber
                </a>

                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;