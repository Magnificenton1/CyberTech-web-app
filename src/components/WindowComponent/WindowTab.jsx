import "./WindowTab.css";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FcCommandLine } from "react-icons/fc";
import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";

export const WindowTab = ({ text }) => {
  return (
    <>
      <div className="window-tab">
        <div className="tab-section-1">
          <div className="text-tab"><FcCommandLine className="command-icon"/>{text}</div>
          <div className="close-tab">
            <IoIosClose />
          </div>
          <div className="new-tab-fill">
          <div className="new-tab">
            <GoPlus />
          </div>
          </div>
        </div>
        <div className="tab-section-2">
          <button className="minimalize-tab"><VscChromeMinimize /></button>
          <button className="full-screen-tab"><VscChromeMaximize /></button>
          <button className="window-close-tab"><IoIosClose /></button>
        </div>
      </div>
    </>
  );
};

WindowTab.propTypes = {
  text: PropTypes.string.isRequired,
};
