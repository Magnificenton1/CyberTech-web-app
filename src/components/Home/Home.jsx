import { memo } from "react";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";
import { HomeParallax } from "./HomePanelContent/HomeParallax";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import "./Home.css";

export const HomeComponent = () => {
  return (
    <div>
      <div className="home"/>
      <BackgroundAnimation />
      <WelcomeMessage />
      <HomeParallax />
    </div>
  );
};

export const Home = memo(HomeComponent);
