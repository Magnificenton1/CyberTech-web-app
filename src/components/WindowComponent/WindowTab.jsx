import "./WindowTab.css";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";
import { FcCommandLine } from "react-icons/fc";
import { useVisibility } from "../FadeInSection/FadeInSection";
import { useTheme } from "../Theme/useTheme";
// import { GoPlus } from "react-icons/go";
// import { VscChromeMinimize } from "react-icons/vsc";
// import { VscChromeMaximize } from "react-icons/vsc";

// I LEFT A LOT OF THINGS COMMANDED IN CASE I WANTED MORE DETAIL ON WINDOW TAB - no functionality sadly

export const WindowTab = ({ text, setIsClosed, class_number }) => {
  const setIsVisible = useVisibility();
  const { theme} = useTheme();
  const handleVisibility = () => {
    if (setIsVisible) {
      // It firstly checks for context (fade in section (useVisibility) - which is in homePage, but I do not want to use it here)
      setIsVisible(false);
    } else {
      // If context is not available, fall back to setIsClosed, which is default close animation for windowPanel
      // I could use only it but then there the nth child fade out wouldn't work
      // TO DO: check if it's really impossible to do with only setIsClosed
      console.warn('No provider available, executing fallback function - delete later in WindowTab');
      setIsClosed(true);
      //fallbackFunction();
    }
  };
  return (// there is only a value for window-tab-5 and text-tab-5 in CSS, the rest is default
          // i wanted some Panels to have different look without creating dependencies, so I came up with simple number values
    <>
    <div className={`window-tab ${class_number === 6 ? `window-tab-${theme}` : ""}`}>
        <div className="tab-section-1">
          <div className={`text-tab ${class_number === 6 ? `text-tab-${theme}` : ""}`}><FcCommandLine className="command-icon"/>{text}</div>
          <div className="close-tab">
            <div className="close-circle">
            <IoIosClose onClick={handleVisibility} style={{position: "absolute"}}/>
            </div>
          </div>
          {/* <div className="new-tab-fill">
          <div className="new-tab">
            <GoPlus />
          </div>
          </div> */}
        </div>
        <div className="tab-section-2">
          {/* <button className="minimalize-tab"><VscChromeMinimize /></button>
          <button className="full-screen-tab"><VscChromeMaximize /></button> */}
          <button className="window-close-tab" onClick={handleVisibility}><IoIosClose/></button>
        </div>
      </div>
    </>
  );
};

WindowTab.propTypes = {
  text: PropTypes.string.isRequired,
  setIsClosed: PropTypes.bool.isRequired,
  class_number: PropTypes.number.isRequired
};
