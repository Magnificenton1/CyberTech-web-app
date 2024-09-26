import { WindowPanel } from "../../../WindowComponent/WindowPanel";
import { youtube_src } from "../../../../EditableThings/HomeYoutubePanel/youtubeURL";
import "./YoutubePanel.css"

export const YoutubePanel = () => {
  return (
    <WindowPanel text={"Nasz kanał"} class_number={3}>
      <div className="youtube-container">
        <div className="youtube-iframe-wrapper">
          <iframe
            src={youtube_src}
            title="CyberTech Youtube channel course"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </WindowPanel>
  );
};
