import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { useTheme } from "../../components/Theme/useTheme";
import ReactSwitch from "react-switch";
import { LogoTextNavbar } from "./LogoTextNavbar";
import { LogoNavlink2 } from "./LogoNavlink2";
import { LogoNavlink1 } from "./LogoNavlink1";

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
        <LogoTextNavbar />
      </NavLink>
      <div className="switch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "orange"}
          handleDiameter={28}
          height={30}
          width={58}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#f85c2c"
          offColor="#00ff77"
        />
      </div>
      <div
        style={{ height: "100%", width: "10%", backgroundColor: "white",}}
      ></div>
      <ul className={`ul-${theme}`}>

        <li>
          <NavLink
            to="/"
            className={` ${selectedNavLink === "home" ? "navbar-chosen" : ""}`}
            onClick={() => handleSelected("home")}
          >
            {selectedNavLink === "home" ? (
              <LogoNavlink1 style={{ marginLeft: "2px" }} />
            ) : (
              ""
            )}
            Home
            {selectedNavLink === "home" ? <LogoNavlink2 /> : ""}
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
            {selectedNavLink === "members" ? <LogoNavlink1 /> : ""}
            Members
            {selectedNavLink === "members" ? <LogoNavlink2 /> : ""}
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
            {selectedNavLink === "projects" ? <LogoNavlink1 /> : ""}
            Projects
            {selectedNavLink === "projects" ? <LogoNavlink2 /> : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${
              selectedNavLink === "contact-us" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("contact-us")}
          >
            {selectedNavLink === "contact-us" ? <LogoNavlink1 /> : ""}
            Contact us
            {selectedNavLink === "contact-us" ? <LogoNavlink2 /> : ""}
          </NavLink>
        </li>
      </ul>
      <div
        style={{ height: "100%", width: "20%", backgroundColor: "white",}}
      ></div>
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
