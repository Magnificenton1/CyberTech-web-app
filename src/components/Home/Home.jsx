import { BackgroundAnimation } from "./BackgroundAnimation";
import { DetailedInfo } from "./DetailedInfo/DetailedInfo";
import "./Home.css";
import { HomeParallax } from "./HomePanelContent/HomeParallax";
import { WavesGraphic } from "./WavesGraphic";
import { WavesGraphic2 } from "./WavesGraphic2";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";

export const Home = () => {
  return (
    <div className="home-page-container">
      <BackgroundAnimation />
      <WelcomeMessage />
      <WavesGraphic />
      <HomeParallax />
      <WavesGraphic2 />
      {/* <DetailedInfo /> */}
    </div>
  );
};
