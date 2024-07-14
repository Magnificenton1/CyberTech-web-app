import { useState, useEffect } from "react";
import { WindowTab } from "./WindowTab";
import "./HomePanels.css";
import { HomeParallax } from "./HomeParallax";

export const HomePanels = () => {
  const [, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // updatuje zmianę okna dynamicznie - potrzebne jeśli zmieniamy strukture divów
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // event listener zmiany okna
    window.addEventListener("resize", handleResize);
    // usuwa event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (window.innerWidth > 1200) {
    // PC version
    return <HomeParallax />;
  } else {
    // mobile / small screen version
    return (
      <div className="home-container">
        <div className="home-panel home-panel1">
          <WindowTab text={"Informacje o nas"} />
        </div>
        <div className="home-panel home-panel2">
          <WindowTab text={"Nasze projekty"} />
        </div>
        <div className="home-panel home-panel3">
          <WindowTab text={"Dołącz do nas"} />
        </div>
      </div>
    );
  }
};
