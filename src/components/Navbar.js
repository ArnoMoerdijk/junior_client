import 
    React
    ,{ useState} 
from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../logo.png";
import Burger from "../burger.png";

export const NavBar = () => {
    const [navActive, activityToggler] = useState(false);
    const toggleNavActivity = () => activityToggler(navActive ? false : true);
    return (
    <>
        <div className="bar">
            <Link id="home-icon" to="/"><img src={logo} alt="Home" /></Link>
            <img className="burger-menu" src={Burger} onClick={toggleNavActivity} />
        </div>
        <div>
            <Link className={navActive ? "nav-content" : "nav-content-none"} to="/" onClick={toggleNavActivity} >Home</Link>
        </div>
        <div>
            <Link className={navActive ? "nav-content" : "nav-content-none"} to="/adressenlijst" onClick={toggleNavActivity}>AdressenLijst</Link>
        </div>

    </>
    );
};