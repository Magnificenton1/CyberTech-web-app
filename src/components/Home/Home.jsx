import { memo } from "react";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";
import { HomePanels } from "./HomePanelContent/HomePanels";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import "./Home.css";

export const HomeComponent = () => {
  return (
    <div>
      <div className="home"/>
      <BackgroundAnimation />
      <WelcomeMessage />
      <HomePanels />
    </div>
  );
};

export const Home = memo(HomeComponent);
