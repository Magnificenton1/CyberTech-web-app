import { useState } from "react";
import { WindowPanel } from "../../../WindowComponent/WindowPanel"
import { TypingEffect } from "../TypingEffect"
import { generate_text_output } from "../../../../EditableThings/HomeInfoPanel/HomeInfoPanelText";
import "./InfoPanel.css";


export const InfoPanel = () => {
    const [textEnd, setTextEnd] = useState(false);
    const renderTheme = localStorage.getItem("theme");
    const text_output = generate_text_output(renderTheme);
    

    return (<WindowPanel text={"Informacje o kole"} class_number={1}>
    <div className="info-text-div">
    <p>
      <TypingEffect
        text={text_output}
        onTypingEnd={() => setTextEnd(true)}
      />
      <span
        className={`blinking-cursor ${
          textEnd
            ? "blinking-cursor-animation"
            : "blinking-cursor-disabled"
        }`}
      >
        _
      </span>
    </p>
    <p className="invisible-text" dangerouslySetInnerHTML={{ __html: text_output }} >
      {/* invisible text to stretch a parent p to it's ending size for typing effect */}
    </p>
    </div>
  </WindowPanel>)
}