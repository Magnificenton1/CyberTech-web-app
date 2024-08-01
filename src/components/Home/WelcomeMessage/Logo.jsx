import { useTheme } from "../../../useTheme";
import "./WelcomeMessage.css";

export const Logo = () => {
  const { theme } = useTheme();

  const getFillColor = (color1, color2) => {
    return theme === "green" ? color1 : color2;
  };

  return (
    <div className="svg-container">
      <svg
        className="svg-logo"
        xmlns="http://www.w3.org/2000/svg"
        width="685.64128"
        height="536.38228"
        version="1.1"
        viewBox="0 0 171.41032 134.09557"
        id="visual"
      >
        <path
          //   fill="#ffffff"
          fill={getFillColor("#ffffff", "#000000")}
          d="M 7.62294,41.87141 V 13.48744 L 19.11038,2 h 30.14496 v 8.86621 h -10.3682 z"
          id="path1091"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          d="m 64.62505,107.02555 0.0625,3.4e-4 h 8.35916 L 123.21848,2.06477 h -8.2515 z"
          id="path1093"
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
        <path
          fill={getFillColor("#ffffff", "#000000")}
          d="m 163.35269,92.22415 v 28.38397 l -11.48744,11.48744 h -30.14496 v -8.86621 h 10.3682 z"
          id="path1091-6"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
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
