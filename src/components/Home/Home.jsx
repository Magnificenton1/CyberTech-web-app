import { memo } from "react";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";

import { HomeParallax } from "./HomePanelContent/HomeParallax";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";

export const HomeComponent = () => {
  return (
    <div>
      <BackgroundAnimation />
      <WelcomeMessage />
      <HomeParallax />
    </div>
  );
};

export const Home = memo(HomeComponent);
