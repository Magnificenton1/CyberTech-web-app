import {
  // MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { WindowTab } from "./WindowTab";
import "./HomePanels.css";
import { memo, useState } from "react";
import { ProjectsPanel } from "./ProjectsPanel/ProjectsPanel";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import { useTheme } from "../../../useTheme";
import { JoinButton } from "../JoinButton/JoinButton";

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

  const text_output = `
  Grupa naszego koła działa od roku 2014, lecz dopiero w 2017 stworzyliśmy koło o nazwie CyberTech. Sztuczna Inteligencja,
  Machine Learning, Przetwarzanie obrazów – to obszry naszych zainteresowań.

  Zajmujemy się w szczególności Tensorflow oraz Kerasem. Planujemy ciągle eksplorować i uczyć się w polu AI.
  Organizujemy również wykłady dla członków koła, jak również prowadzimy sesje live codingu oraz prowadzimy kanał na youtube.
  Jaki jest próg wejściowy? Żaden! Jesteśmy grupą pasjonatów, której zależy na szlifowaniu swoich umiejętności i każdy, kto chce nam pomóc jest mile widziany.
  
  No dobra może potrzebujecie sprawnego laptopa...
  Dajemy dużo miejsca na rozwój i jesteśmy otwarci na młodych, ambitnych ludzi.
`;

  return (
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      className={`${
        theme === "green" ? "home-container-green" : "home-container-orange"
      } home-container`}
    >
      <FadeInSection>
        <div className="panel1-container"
        // factorX={factorX[0]} factorY={factorY[0]}
        >
          <div
            className={`${
              theme === "green" ? "home-panel-green" : "home-panel-orange"
            } home-panel home-panel1`}
            onMouseEnter={handleParallaxMouseEnter(0)}
            onMouseLeave={handleParallaxMouseLeave(0)}
          >
            <MemoizedWindowTab text={"Informacje o nas"} />
            <p dangerouslySetInnerHTML={{ __html: text_output }} /> 
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel2-container">
          <div
            className={`${
              theme === "green" ? "home-panel-green" : "home-panel-orange"
            } home-panel home-panel2`}
            // factorX={factorX[1]}
            // factorY={factorY[1]}
          >
            <div
              className="panel-container"
              onMouseEnter={handleParallaxMouseEnter(1)}
              onMouseLeave={handleParallaxMouseLeave(1)}
            >
              <MemoizedWindowTab text={"Nasze projekty"} />
              <ProjectsPanel />
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel3-container"
        // factorX={factorX[2]} factorY={factorY[2]}
        >
          <div
            className={`${
              theme === "green" ? "home-panel-green" : "home-panel-orange"
            } home-panel home-panel3`}
            onMouseEnter={handleParallaxMouseEnter(2)}
            onMouseLeave={handleParallaxMouseLeave(2)}
          >
            <MemoizedWindowTab text={"Dołącz do nas"} />
            <JoinButton/>
          </div>
        </div>
      </FadeInSection>
    </MouseParallaxContainer>
  );
};

export const HomeParallax = memo(HomeParallaxComponent);
