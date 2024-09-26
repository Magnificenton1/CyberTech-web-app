import "./HomePanels.css";
import { memo } from "react";
import { FadeInSection } from "../../FadeInSection/FadeInSection";
import { useTheme } from "../../Theme/useTheme";
import { JoinButton } from "./DiscordButton/DiscordButton";
import { Slider } from "./ProjectsPanel/Slider";
import { YoutubePanel } from "./YoutubePanel/YoutubePanel";
import { InfoPanel } from "./InfoPanel/InfoPanel";

export const HomePanelsComponent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`home-container-${theme} home-container`}
    >
      <FadeInSection>
        <div className="panel-container1">
          <InfoPanel/>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel-container2">
        <YoutubePanel />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="panel-container1">
          <Slider/>
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
