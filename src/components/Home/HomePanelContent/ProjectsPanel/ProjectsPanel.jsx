import CustomSlider from "./CustomSlider.jsx";
import "./ProjectsPanel.css"
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import images from "./images.js";




export const ProjectsPanel = () => {

    return (
        <div className="App">
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
        </div>
      );
}