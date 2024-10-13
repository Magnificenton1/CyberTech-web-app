import { memo, useEffect } from "react";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";
import { HomePanels } from "./HomePanelContent/HomePanels";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import "./Home.css";
import { useLink } from "../Navbar/useLink";
import { useTheme } from "../Theme/useTheme";

export const HomeComponent = () => {
  const { setSelectedNavLink} = useLink();
  const { theme} = useTheme();
  useEffect(() => {
    setSelectedNavLink("home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="home">
  <div className={`home-background home-background-${theme}`}>
    <div className="background-layer background-layer-1" />
      <div className="background-layer background-layer-2" />
      </div>
      <BackgroundAnimation />
      <WelcomeMessage />
      <HomePanels />
    </div>
  );
};

export const Home = memo(HomeComponent);
