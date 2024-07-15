import { useState, useEffect, memo } from "react";
import { WindowTab } from "./WindowTab";
import "./HomePanels.css";
import { HomeParallax } from "./HomeParallax";
import { ProjectsPanel } from "./ProjectsPanel/ProjectsPanel";

export const HomePanels = () => {
  const [, setWindowWidth] = useState(window.innerWidth);
  const MemoizedWindowTab = memo(WindowTab);
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
          <MemoizedWindowTab text={"Informacje o nas"} />
        </div>
        <div className="home-panel home-panel2">
          <MemoizedWindowTab text={"Nasze projekty"} />
          <ProjectsPanel/>
        </div>
        <div className="home-panel home-panel3">
          <MemoizedWindowTab text={"Dołącz do nas"} />
        </div>
      </div>
    );
  }
};
