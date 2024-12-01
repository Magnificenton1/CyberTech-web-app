import { useState } from "react";
import "./DiscordButton.css";
import { FaDiscord } from "react-icons/fa6";
import { WindowPanel } from "../../../WindowComponent/WindowPanel";
import { discord_url } from "../../../../EditableThings/Links/links";
export const JoinButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    // Wait before redirecting - it's mainly for mobile users to experience the animation, because they cannot hover without clicking
    setTimeout(() => {
      window.open(`${discord_url}`, '_blank');
    }, 1300);
  };

  return (
    <WindowPanel text={"Dołącz do nas"} class_number={4}>
    <div className="join-button-container">
      <div className="join-text">Podoba ci się to, co widzisz?</div>
      <div className={`clip-path-circle1 ${hovered === true ? "hovered" : ""}`}>
      <div className="join-text">Dołącz na naszego discorda!</div>
      </div>
      <button className={`join-button ${hovered === true ? "hovered" : ""}`} onMouseOver={() => setHovered(true)} onClick={handleClick}>
        <div className={`clip-path-circle2 ${hovered === true ? "hovered" : ""} `}>
        <FaDiscord/>
        </div>
        <FaDiscord/>
      </button>
    </div>
    </WindowPanel>
  );
};
