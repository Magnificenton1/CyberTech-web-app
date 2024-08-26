import { Fade } from "react-slideshow-image";
import "./Slider.css";
import SlidesJSON from "./images/images"
import { WindowPanel } from "../../../WindowComponent/WindowPanel";


export const Slider = () => {
    const buttonStyle = {
        paddingLeft: "4px",
        paddingRight: "4px",
        width: "30px",
        height: "35px",
        background: '#100c0c',
        borderRadius: '0.5rem',
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "4px",
        marginRight: "4px"
    };
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }

    const indicators = (index) => (<div className="slide-indicator">{index + 1}</div>);

  return (
    <WindowPanel text={"Nasze projekty"} class_number={"2"}>
    <Fade {...properties} indicators={indicators}>
      {SlidesJSON.slides.map((slideImage, index) => (
        <div key={index} className="slide-container">
          <div className="text-slider">
            <div className="title-slider">{slideImage.title}</div>
            <div className="caption-slider">{slideImage.caption}</div>
          </div>
          <img className="image-slider" src={slideImage.url} />
        </div>
      ))}
    </Fade>
    </WindowPanel>
  );
};
