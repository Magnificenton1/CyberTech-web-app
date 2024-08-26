import "./HomePanels.css";
import { useState, memo } from "react";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import { useTheme } from "../../Theme/useTheme";
import { JoinButton } from "./JoinButton/JoinButton";
import { WindowPanel } from "../../WindowComponent/WindowPanel";
import { TypingEffect } from "./TypingEffect";
import { Slider } from "./ProjectsPanel/Slider";
import { YoutubePanel } from "./YoutubePanel/YoutubePanel";

export const HomePanelsComponent = () => {
  const { theme } = useTheme();
  const [textEnd, setTextEnd] = useState(false);
  const renderTheme = theme;
  const text_output = `
C:\\cybertech> Chcesz zacząć swoją przygodę ze <span style="color: ${
    renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"
  };">sztuczną inteligencją</span>? A może szukasz ciekawych projektów w gronie pasjonatów?

C:\\cybertech> <span style="color: ${
    renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"
  };">Świetnie trafiłeś!</span>

C:\\cybertech> Już od dziesięciu lat wspieramy naszych członków w zgłębianiu świata AI, oferując możliwość zdobycia cennego doświadczenia.

C:\\cybertech> Specjalizujemy się w <span style="color: ${
    renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"
  };">przetwarzaniu obrazów</span> i <span style="color: ${
    renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"
  };">uczeniu maszynowym</span> korzystając głównie z narzędzi takich jak <span style="color: ${
    renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"
  };">TensorFlow i Keras</span>.

C:\\cybertech> <span style="color: ${
    renderTheme === "green" ? "rgba(0, 255, 119, 1)" : "#f85c2c"
  };">Oferujemy wykłady wprowadzające, live coding i projekty, które pozwalają stopniowo poszerzać swoją wiedzę i umiejętności.</span>

C:\\cybertech> Jesteśmy otwarci na wszystkich – potrzebujesz jedynie motywacji i podstawowych umiejętności programowania. Masz inne talenty albo interesujesz się innymi dziedzinami informatyki? Również zapraszamy! W naszych interdyscyplinarnych projektach każdy znajdzie coś dla siebie.
C:\\cybertech> `;

  return (
    <div
      className={`${
        theme === "green" ? "home-container-green" : "home-container-orange"
      } home-container`}
    >
      <FadeInSection>
        <div className="panel-container1">
          <WindowPanel text={"Informacje o kole"} class_number={"1"}>
            <p>
              <TypingEffect
                text={text_output}
                onTypingEnd={() => setTextEnd(true)}
              />
              <span
                className={`blinking-cursor ${
                  textEnd
                    ? "blinking-cursor-animation"
                    : "blinking-cursor-disabled"
                }`}
              >
                _
              </span>
            </p>
          </WindowPanel>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel-container2">
          <Slider />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel-container1">
          <YoutubePanel />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel-container2">
          <JoinButton />
        </div>
      </FadeInSection>
    </div>
  );
};

export const HomePanels = memo(HomePanelsComponent);
