import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

//ikonki
import { FaHouseChimney } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export const Navbar = () => {
  const [selectedNavLink, setSelectedNavLink] = useState("home");
//bardzo prosty system, może nawet za prosty
// - porównywanie stringów z nazwami stron do useState zmiana po kliknięciu
//NavLink - przenosi do ustawionego patha po kliknięciu jak button - path definiujemy w App.jsx
  const handleSelected = (navlink) => {
    setSelectedNavLink(navlink);
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={`nav-icon ${selectedNavLink === "home" ? "navbar-chosen" : ""}`}
            onClick={() => handleSelected("home")}
          >
            <FaHouseChimney />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/members"
            className={`nav-icon ${
              selectedNavLink === "members" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("members")}
          >
            <IoPeople />
            Members
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={`nav-icon ${
              selectedNavLink === "projects" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("projects")}
          >
            <GiGraduateCap />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`nav-icon ${
              selectedNavLink === "contact-us" ? "navbar-chosen" : ""
            }`}
            onClick={() => handleSelected("contact-us")}
          >
            <FaPaperPlane />
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
