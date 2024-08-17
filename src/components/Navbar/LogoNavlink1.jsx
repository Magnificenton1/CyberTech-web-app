import { useTheme } from "../../components/Theme/useTheme";
import "./Navbar.css";

export const LogoNavlink1 = () => {
  const { theme } = useTheme();

  const getFillColor = (color1, color2) => {
    return theme === "green" ? color1 : color2;
  };

  return (
    <div className="svg-container" style={{marginTop: "6px", marginLeft: "2px"}}>
      <svg
        className="svg-logo"
        width="685.64128"
        height="536.38228"
        version="1.1"
        viewBox="0 0 72.999 129.935"
        id="visual"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <path
          fill="#000000"
          d="M 7.62294,41.87141 V 13.48744 L 19.11038,2 h 30.14496 v 8.86621 h -10.3682 z"
          id="path1091"
        />
        <path
          fill={getFillColor("#00ff77", "#f85c2c")}
          d="m 26.12907,54.70445 4.61675,7.30814 v 27.86432 l 8.47319,8.47319 h 10.75452 v 8.81744 H 19.47977 L 7.82566,95.51344 V 64.46205 L 2,58.63639 30.64861,29.98778 v 17.29673 z"
          id="path1099"
        />
        <path
          fill={getFillColor("#00ff77", "#f85c2c")}
          d="m 55.76384,33.2225 17.07504,9.63798 V 55.66121 L 41.91863,38.60829 V 27.86538 L 72.80522,10.95034 v 12.64054 z"
          id="path1101"
        />
      </svg>
    </div>
  );
};
