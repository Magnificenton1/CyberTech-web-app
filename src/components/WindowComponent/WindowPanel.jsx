import { WindowTab } from "./WindowTab";
import { memo } from "react";
import { useTheme } from "../Theme/useTheme";
import PropTypes from 'prop-types';
import "./WindowPanel.css";

export const WindowPanel = ({ children, class_number, text }) => {
  const MemoizedWindowTab = memo(WindowTab);
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "green" ? "window-panel-green" : "window-panel-orange"
      } window-panel window-panel-${class_number}`}
    >
      <MemoizedWindowTab text={text} />
      <div>{children}</div>
    </div>
  );
};

WindowPanel.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a valid React node
  class_number: String,
  text: String,
};