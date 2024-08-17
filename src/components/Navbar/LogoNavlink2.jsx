import { useTheme } from "../../components/Theme/useTheme";
import "./Navbar.css";
export const LogoNavlink2 = () => {
  const { theme } = useTheme();

  const getFillColor = (color1, color2) => {
    return theme === "green" ? color1 : color2;
  };

  return (
    <div className="svg-container" style={{marginBottom: "6px", marginRight: "2px"}}>
      <svg
        className="svg-logo"
        width="685.64128"
        height="536.38228"
        version="1.1"
        viewBox="64.648 0 106.763 133.295"
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        
        <path
          fill="#000000"
          d="m 163.35269,92.22415 v 28.38397 l -11.48744,11.48744 h -30.14496 v -8.86621 h 10.3682 z"
          id="path1091-6"
        />
        <path
          fill={getFillColor("#00ff77", "#f85c2c")}
          d="m 145.28126,79.53538 -4.61675,-7.30814 V 44.36292 l -8.47319,-8.47319 H 121.4368 v -8.81744 h 30.49376 l 11.65411,11.6541 v 31.05139 l 5.82566,5.82566 -28.64861,28.64861 V 86.95532 Z"
          id="path1099-2"
        />
        <path
          fill={getFillColor("#00ff77", "#f85c2c")}
          d="M 118.81405,100.98322 101.73901,91.34524 V 78.54451 l 30.92025,17.05292 v 10.74291 l -30.88659,16.91504 v -12.64054 z"
          id="path1101-6"
        />
      </svg>
    </div>
  );
};
