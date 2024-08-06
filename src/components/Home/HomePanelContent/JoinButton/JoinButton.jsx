import { useState } from "react";
import "./JoinButton.css";
import { FaDiscord } from "react-icons/fa6";
import { useTheme } from "../../../Theme/useTheme";
export const JoinButton = () => {
  const [hovered, setHovered] = useState(false);
  const { theme} = useTheme();
  return (
    <div className="join-button-container">
      <div className="join-text">Podoba ci się to co widzisz?</div>
      <div className={`clip-path-circle1 ${hovered === true ? "hovered" : ""}`}>
      <div className="join-text">Dołącz na naszego discorda!</div>
      </div>
      <a href="https://discord.gg/A8HreVFFa5" target="_blank">
      <button className={`join-button ${hovered === true ? "hovered" : ""}`} onMouseOver={() => setHovered(true)}>
        <div className={`clip-path-circle2 ${hovered === true ? "hovered" : ""} ${theme === "green" ? "clip-path-circle2-green" : " clip-path-circle2-orange"}`}>
        <FaDiscord/>
        </div>
        <FaDiscord/>
      </button>
      </a>
    </div>
  );
};
