import { DetailedInfo } from "./DetailedInfo/DetailedInfo";
import "./Home.css";
import { HomePanels } from "./HomePanelContent/HomePanels";
import { LOGO } from "./LOGO";

export const Home = () => {
  return (
    <div className="home-page-container">
      <LOGO />
      <HomePanels />
      <DetailedInfo/>
    </div>
  );
};
