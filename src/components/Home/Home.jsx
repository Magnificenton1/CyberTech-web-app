import { BackgroundAnimation } from "./BackgroundAnimation";
import { DetailedInfo } from "./DetailedInfo/DetailedInfo";
import "./Home.css";
import { HomeParallax } from "./HomePanelContent/HomeParallax";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";

export const Home = () => {
  return (

    <div className="home-page-container">
      <BackgroundAnimation/>
      <WelcomeMessage/>
      <HomeParallax />
      <DetailedInfo/>
    </div>
  );
};
