import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useTheme } from "../../components/Theme/useTheme";
import ReactSwitch from "react-switch";
import { LogoTextNavbar } from "./LogoTextNavbar";
import { LogoNavlink2 } from "./LogoNavlink2";
import { LogoNavlink1 } from "./LogoNavlink1";

export const Navbar = () => {
  const [selectedNavLink, setSelectedNavLink] = useState(() => {
      return localStorage.getItem("selectedNav") || "home";
    });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem('theme') || 'orange';
  // });
  useEffect(() => {
    localStorage.setItem("selectedNav", selectedNavLink);
  }, [selectedNavLink]);

  const handleMenuOpen = () => {
    if (!isMenuOpen) {
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
      <NavLink className="cybertech-title" to="/" onClick={() => handleSelected("home")}>
        <LogoTextNavbar />
      </NavLink>
      <div className="switch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "green"}
          handleDiameter={28}
          height={30}
          width={58}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#00ff77"
          offColor="#f85c2c"
        />
      </div>
      <div
        style={{ height: "100%", width: "100%", backgroundColor: "white",  zIndex: "1000"}}
      ></div>
      <ul className={`ul-${theme} ${isMenuOpen ? "active" : ""}`}>

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
        style={{ height: "100%", width: "100%", backgroundColor: "white", zIndex: "1000"}}
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
