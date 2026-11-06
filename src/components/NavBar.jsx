import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [activeLink, setActiveLink] = useState("/");

    function linkClicked(link){
        setActiveLink(link);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">HealthTrack</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/" ? "active" : ""}`} aria-current="page" to="/" onClick={() => linkClicked("/")}>Calorie Tracker</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/fitness" ? "active" : ""}`} to="/fitness" onClick={() => linkClicked("/fitness")}>Fitness</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/bmi" ? "active" : ""}`} to="/bmi" onClick={() => linkClicked("/bmi")}>BMI Calculator</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/contact" ? "active" : ""}`} to="/contact" onClick={() => linkClicked("/contact")}>Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "/about" ? "active" : ""}`} to="/about" onClick={() => linkClicked("/about")}>About</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
