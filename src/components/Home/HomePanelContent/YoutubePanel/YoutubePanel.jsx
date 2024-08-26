import { WindowPanel } from "../../../WindowComponent/WindowPanel";
import "./YoutubePanel.css"

export const YoutubePanel = () => {
  return (
    <WindowPanel text={"Nasz kanał"} class_number={"3"}>
      <div className="youtube-container">
        <div className="youtube-iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/bhWJF9FlBqM?si=lYYWvJgvGeca7wGb" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </WindowPanel>
  );
};
