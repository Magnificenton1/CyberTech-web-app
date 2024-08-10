import { WindowTab } from "./WindowTab";
import { memo, useState } from "react";
import PropTypes from 'prop-types';
import "./WindowPanel.css";

const WindowPanelComponent = ({ children, class_number, text}) => {
  const MemoizedWindowTab = memo(WindowTab);
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      className={`window-panel window-panel-${class_number} ${isClosed ? "window-panel-closed" : ""}`}
    >
      <MemoizedWindowTab text={text} setIsClosed={setIsClosed}/>
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