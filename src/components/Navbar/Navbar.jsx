import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

import { useTheme } from "../../useTheme";
import ReactSwitch from "react-switch";
import { LogoTextNavbar } from "./LogoTextNavbar";

export const Navbar = () => {
  const [selectedNavLink, setSelectedNavLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleMenuOpen = () => {
    if (isMenuOpen === false) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };
  //bardzo prosty system, może nawet za prosty
  // - porównywanie stringów z nazwami stron do useState zmiana po kliknięciu
  //NavLink - przenosi do ustawionego patha po kliknięciu jak button - path definiujemy w App.jsx
  const handleSelected = (navlink) => {
    setSelectedNavLink(navlink);
  };
  return (
    <nav>
      <div className={`scroll-watcher-${theme} scroll-watcher`}></div>
      <NavLink className="cybertech-title" to="/">
        <LogoTextNavbar/>
      </NavLink>
      <div style={{ height: "100%", width: "100%", backgroundColor: "white"}}></div>
      {/* ten navlink jest na cała stronę - naprawić! */}
      <ul className={`ul-${theme}`}>
        <li>
          <div className="switch">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "orange"}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#ff7f00"
              offColor="#00ff00"
            />
          </div>
        </li>

        <li>
          <NavLink
            to="/"
            className={` ${selectedNavLink === "home" ? "navbar-chosen" : ""}`}
            onClick={() => handleSelected("home")}
          >
            {/* <FaHouseChimney /> */}
            {selectedNavLink === "home" ? "{<Home/>}" : "Home"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/members"
            className={` ${
              selectedNavLink === "members" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("members")}
          >
            {/* <IoPeople /> */}
            Members
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={` ${
              selectedNavLink === "projects" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("projects")}
          >
            {/* <GiGraduateCap /> */}
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${
              selectedNavLink === "contact-us" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("contact-us")}
          >
            {/* <FaPaperPlane /> */}
            Contact us
          </NavLink>
        </li>
      </ul>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => handleMenuOpen()}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};
