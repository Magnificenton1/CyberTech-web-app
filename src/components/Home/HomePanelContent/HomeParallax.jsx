import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { WindowTab } from "./WindowTab";
import "./HomePanels.css";
import { memo, useState } from "react";
import { ProjectsPanel } from "./ProjectsPanel/ProjectsPanel";

export const HomeParallaxComponent = () => {
  // MEMOIZATION - optymalizacja!
  const MemoizedWindowTab = memo(WindowTab);
  //nie można zrobić memo ParallaxChild bo wtedy kiedy najedziesz raz na panel i się włączy MouseOver to potem MouseLeave nie działa!


  const [factorX, setFactorX] = useState([0.1, -0.3, 0.05]);
  const [factorY, setFactorY] = useState([-0.08, 0.1, 0.05]); // jakieś losowe wartości co miałem w głowie - można zmieniać

  const handleParallaxMouseEnter = (number) => {
    return () => {
      const newFactorX = [...factorX];
      const newFactorY = [...factorY];
      newFactorX[number] = 0;
      newFactorY[number] = 0;
      setFactorX(newFactorX);
      setFactorY(newFactorY);
      console.log(`Over ${number}`);
    };
  };
  const handleParallaxMouseLeave = (number) => {
    return () => {
      const newFactorX = [...factorX];
      const newFactorY = [...factorY];
      newFactorX[number] = getRandomNumber();
      newFactorY[number] = getRandomNumber();
      setFactorX(newFactorX);
      setFactorY(newFactorY);
      console.log(`Leave ${number}`);
    };
  };

  const getRandomNumber = () => {
    return Math.random() * 0.2 - 0.1;
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.14}
      globalFactorY={0.14}
      className="home-container"
    >
      {/* panel-1,2,3 to zmiana rozmieszczenia */}
      <div className="home-half-container">
        <MouseParallaxChild
          className="home-panel home-panel1"
          factorX={factorX[0]}
          factorY={factorY[0]}
        >
          {/* musiłem dodać div z panel-container do każdego panela bo onMouse effects nie działają na MouseParallaxChild... */}
          <div
            className="panel-container"
            onMouseEnter={handleParallaxMouseEnter(0)}
            onMouseLeave={handleParallaxMouseLeave(0)}
          >
            <MemoizedWindowTab text={"Informacje o nas"} />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild
          className="home-panel home-panel3"
          factorX={factorX[2]}
          factorY={factorY[2]}
        >
          <div
            className="panel-container"
            onMouseEnter={handleParallaxMouseEnter(2)}
            onMouseLeave={handleParallaxMouseLeave(2)}
          >
            <MemoizedWindowTab text={"Dołącz do nas"} />
          </div>
        </MouseParallaxChild>
      </div>
      <div className="home-half-container">
        <MouseParallaxChild
          className="home-panel home-panel2"
          factorX={factorX[1]}
          factorY={factorY[1]}
        >
          <div
            className="panel-container"
            onMouseEnter={handleParallaxMouseEnter(1)}
            onMouseLeave={handleParallaxMouseLeave(1)}
          >
            <MemoizedWindowTab text={"Nasze projekty"} />
            <ProjectsPanel/>
          </div>
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
};

export const HomeParallax = memo(HomeParallaxComponent);
