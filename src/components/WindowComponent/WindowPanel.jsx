import { WindowTab } from "./WindowTab";
import { memo } from "react";
import { useTheme } from "../Theme/useTheme";
import PropTypes from 'prop-types';
import "./WindowPanel.css";

const WindowPanelComponent = ({ children, class_number, text}) => {
  const MemoizedWindowTab = memo(WindowTab);
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "green" ? "window-panel-green" : "window-panel-orange"
      } window-panel window-panel-${class_number}`}
    >
      <MemoizedWindowTab text={text}/>
      <div>{children}</div>
    </div>
  );
};

WindowPanelComponent.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a valid React node
  class_number: PropTypes.string, // Ensure class_number is a string
  text: PropTypes.string // Ensure text is a string
};

export const WindowPanel = memo(WindowPanelComponent);