import "./HomePanels.css";
import { useState, memo} from "react";
import { ProjectsPanel } from "./ProjectsPanel/ProjectsPanel";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import { useTheme } from "../../Theme/useTheme";
import { JoinButton } from "./JoinButton/JoinButton";
import { WindowPanel } from "../../WindowComponent/WindowPanel";
import { TypingEffect } from "./TypingEffect";

export const HomeParallaxComponent = () => {
  const { theme } = useTheme();
  const [textEnd, setTextEnd] = useState(false);
  const text_output = `
C:\\cybertech> Chcesz zacząć swoją przygodę ze <span style="color: rgba(0, 255, 119, 1);">sztuczną inteligencją</span>? A może szukasz ciekawych projektów w gronie pasjonatów?

C:\\cybertech> <span style="color: #f85c2c;">Świetnie trafiłeś!</span>

C:\\cybertech> Już od dziesięciu lat wspieramy naszych członków w zgłębianiu świata AI, oferując możliwość zdobycia cennego doświadczenia.

C:\\cybertech> Specjalizujemy się w <span style="color: rgba(0, 255, 119, 1);">przetwarzaniu obrazów</span> i <span style="color: #f85c2c;">uczeniu maszynowym</span> korzystając głównie z narzędzi takich jak <span style="color: rgba(0, 255, 119, 1);">TensorFlow i Keras</span>.

C:\\cybertech> <span style="color: #f85c2c;">Oferujemy wykłady wprowadzające, live coding i projekty, które pozwalają stopniowo poszerzać swoją wiedzę i umiejętności.</span>

C:\\cybertech> Jesteśmy otwarci na wszystkich – potrzebujesz jedynie motywacji i podstawowych umiejętności programowania. Masz inne talenty albo interesujesz się innymi dziedzinami informatyki? Również zapraszamy! W naszych interdyscyplinarnych projektach każdy znajdzie coś dla siebie.
C:\\cybertech> `;

  return (
    <div
      className={`${
        theme === "green" ? "home-container-green" : "home-container-orange"
      } home-container`}
    >
      <FadeInSection>
        <div className="panel1-container">
          <WindowPanel text={"Informacje o nas"} class_number={"1"}>
            <p>
              <TypingEffect
                text={text_output}
                onTypingEnd={() => setTextEnd(true)}
              />
              <span className={`blinking-cursor ${textEnd ? "blinking-cursor-animation" : ""}`}>|</span>
            </p>
          </WindowPanel>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          className="panel2-container"
        >
          <WindowPanel text={"Nasze projekty!"} class_number={"2"}>
            <ProjectsPanel />
          </WindowPanel>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          className="panel3-container"
        >
          <WindowPanel text={"Dołącz do nas!"} class_number={"3"}>
            <JoinButton />
          </WindowPanel>
        </div>
      </FadeInSection>
    </div>
  );
};

export const HomeParallax = memo(HomeParallaxComponent);
