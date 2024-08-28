import { memo, useEffect } from "react";
import { BackgroundAnimation } from "../BackgroundAnimation/BackgroundAnimation";
import { HomePanels } from "./HomePanelContent/HomePanels";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import "./Home.css";
import { useLink } from "../Navbar/useLink";

export const HomeComponent = () => {
  const { setSelectedNavLink} = useLink();
  useEffect(() => {
    setSelectedNavLink("home")
  }, []);

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
