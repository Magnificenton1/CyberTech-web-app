import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { WindowTab } from "./WindowTab";
import "./HomePanels.css";
import { memo, useState } from "react";
import { ProjectsPanel } from "./ProjectsPanel/ProjectsPanel";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import { useTheme } from "../../../ThemeContext";

export const HomeParallaxComponent = () => {
  // MEMOIZATION - optymalizacja!
  const MemoizedWindowTab = memo(WindowTab);
  //nie można zrobić memo ParallaxChild bo wtedy kiedy najedziesz raz na panel i się włączy MouseOver to potem MouseLeave nie działa!

  const [factorX, setFactorX] = useState([0.1, 0.3, 0.05]);
  const [factorY, setFactorY] = useState([0.08, 0.1, 0.05]); // jakieś losowe wartości co miałem w głowie - można zmieniać

  const { theme } = useTheme();
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

  const text_output = `C:\\Users\\YourUsername&gt;dir
  Volume in drive C has no label.
  Volume Serial Number is XXXX-XXXX
 
  Directory of C:\\Users\\YourUsername
 
 07/18/2024  03:12 PM    &lt;DIR&gt;          .
 07/18/2024  03:12 PM    &lt;DIR&gt;          ..
 05/12/2024  01:11 PM    &lt;DIR&gt;          Documents
 06/14/2024  11:45 AM    &lt;DIR&gt;          Downloads
 07/15/2024  09:30 PM    &lt;DIR&gt;          Music
`;

  return (
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      className={`${theme === "green" ? "home-container-green" : "home-container-orange"} home-container`}
    >
      <FadeInSection>
        <MouseParallaxChild
          factorX={factorX[0]}
          factorY={factorY[0]}
        >
          <div
            className={`${theme === "green" ? "home-panel-green" : "home-panel-orange"} home-panel home-panel1`}
            onMouseEnter={handleParallaxMouseEnter(0)}
            onMouseLeave={handleParallaxMouseLeave(0)}
          >
            <MemoizedWindowTab text={"Informacje o nas"} />
            <p dangerouslySetInnerHTML={{ __html: text_output }} />
          </div>
        </MouseParallaxChild>
      </FadeInSection>
      <FadeInSection>
      <div className="panel2-container">
        <MouseParallaxChild
          className={`${theme === "green" ? "home-panel-green" : "home-panel-orange"} home-panel home-panel2`}
          factorX={factorX[1]}
          factorY={factorY[1]}
        >
          <div
            className="panel-container"
            onMouseEnter={handleParallaxMouseEnter(1)}
            onMouseLeave={handleParallaxMouseLeave(1)}
          >
            <MemoizedWindowTab text={"Nasze projekty"} />
            <ProjectsPanel />
          </div>
        </MouseParallaxChild>
      </div>
      </FadeInSection>
      <FadeInSection>
      <MouseParallaxChild
        
        factorX={factorX[2]}
        factorY={factorY[2]}
      >
        <div
          className={`${theme === "green" ? "home-panel-green" : "home-panel-orange"} home-panel home-panel3`}
          onMouseEnter={handleParallaxMouseEnter(2)}
          onMouseLeave={handleParallaxMouseLeave(2)}
        >
          <MemoizedWindowTab text={"Dołącz do nas"} />
        </div>
      </MouseParallaxChild>
      </FadeInSection>
    </MouseParallaxContainer>
  );
};

export const HomeParallax = memo(HomeParallaxComponent);
