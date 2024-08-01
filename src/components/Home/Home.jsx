import { memo } from "react";
import { BackgroundAnimation } from "./BackgroundAnimation/BackgroundAnimation";
import { HomeParallax } from "./HomePanelContent/HomeParallax";
import { WavesGraphic } from "./WavesGraphic";
import { WavesGraphic2 } from "./WavesGraphic2";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";

const HomeComponent = () => {
  return (
    <div className="home-page-container">
      <BackgroundAnimation />
      <WelcomeMessage />
      <WavesGraphic />
      <HomeParallax />
      <WavesGraphic2 />
    </div>
  );
};

export const Home = memo(HomeComponent);
