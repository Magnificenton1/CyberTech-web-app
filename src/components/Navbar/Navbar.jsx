import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useTheme } from "../../components/Theme/useTheme";
import ReactSwitch from "react-switch";
import { LogoTextNavbar } from "./LogoTextNavbar";
import { LogoNavlink2 } from "./LogoNavlink2";
import { LogoNavlink1 } from "./LogoNavlink1";
import { useLink } from "./useLink";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { selectedNavLink } = useLink();

  useEffect(() => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  }, [selectedNavLink]);

  // timeout is added because the menu hides instantly and
  // it's startling for some users

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
  return (
    <nav>
      <div className={`scroll-watcher-${theme} scroll-watcher`}></div>
      <NavLink className="cybertech-title" to="/">
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
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          zIndex: "1000",
        }}
      ></div>
      <ul className={`ul-${theme} ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={` ${selectedNavLink === "home" ? "navbar-chosen" : ""}`}
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
          >
            {selectedNavLink === "members" ? <LogoNavlink1 /> : ""}
            Members
            {selectedNavLink === "members" ? <LogoNavlink2 /> : ""}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={`${
              selectedNavLink === "contact-us" ? "navbar-chosen" : ""
            }`}
          >
            {selectedNavLink === "contact-us" ? <LogoNavlink1 /> : ""}
            Contact us
            {selectedNavLink === "contact-us" ? <LogoNavlink2 /> : ""}
          </NavLink>
        </li>
      </ul>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          zIndex: "1000",
        }}
      ></div>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => handleMenuOpen()}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            className="hamburger-svg"
          >
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
          {/* animation from https://codepen.io/ainalem/pen/wvKOEMV */}
        </div>
      </div>
    </nav>
  );
};
