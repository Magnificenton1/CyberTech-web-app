import "./WindowTab.css";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";
import { FcCommandLine } from "react-icons/fc";
import { useVisibility } from "../FadeInSection/FadeInSection";
// import { GoPlus } from "react-icons/go";
// import { VscChromeMinimize } from "react-icons/vsc";
// import { VscChromeMaximize } from "react-icons/vsc";

export const WindowTab = ({ text, setIsClosed }) => {
  const setIsVisible = useVisibility();
  const handleVisibility = () => {
    if (setIsVisible) {
      // It firstly checks for context (fade in section (useVisibility) - which is in homePage, but I do not want to use it here)
      setIsVisible(false);
    } else {
      // If context is not available, fall back to setIsClosed, which is default close animation for windowPanel
      // I could use only it but then there the nth child fade out wouldn't work
      // TO DO: check if it's really impossible to do with only setIsClosed
      console.warn('No provider available, executing fallback function');
      setIsClosed(true);
      //fallbackFunction();
    }
  };
  return (
    <>
      <div className="window-tab">
        <div className="tab-section-1">
          <div className="text-tab"><FcCommandLine className="command-icon"/>{text}</div>
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
};
