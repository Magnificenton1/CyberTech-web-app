import { memo } from "react";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";
import { HomeParallax } from "./HomePanelContent/HomeParallax";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import "./Home.css";
import { useTheme } from "../Theme/useTheme";

export const HomeComponent = () => {
  const { theme} = useTheme();
  return (
    <div>
      <div className={`home-${theme} home`}/>
      <BackgroundAnimation />
      <WelcomeMessage />
      <HomeParallax />
    </div>
  );
};

export const Home = memo(HomeComponent);
