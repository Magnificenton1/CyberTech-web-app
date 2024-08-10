import { useState } from "react";
import "./JoinButton.css";
import { FaDiscord } from "react-icons/fa6";
import { useTheme } from "../../../Theme/useTheme";
export const JoinButton = () => {
  const [hovered, setHovered] = useState(false);
  const { theme} = useTheme();

  const handleClick = () => {
    // Wait before redirecting - it's mainly for mobile users to experience the animation, because they cannot hover without clicking
    setTimeout(() => {
      window.open('https://discord.gg/A8HreVFFa5', '_blank');
    }, 1300);
  };

  return (
    <div className="join-button-container">
      <div className="join-text">Podoba ci się to co widzisz?</div>
      <div className={`clip-path-circle1 ${hovered === true ? "hovered" : ""}`}>
      <div className="join-text">Dołącz na naszego discorda!</div>
      </div>
      <button className={`join-button ${hovered === true ? "hovered" : ""}`} onMouseOver={() => setHovered(true)} onClick={handleClick}>
        <div className={`clip-path-circle2 ${hovered === true ? "hovered" : ""} ${theme === "green" ? "clip-path-circle2-green" : " clip-path-circle2-orange"}`}>
        <FaDiscord/>
        </div>
        <FaDiscord/>
      </button>
    </div>
  );
};
// href="https://discord.gg/A8HreVFFa5" target="_blank"
