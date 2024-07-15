import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';

import "./CustomSlider.css";
function CustomSlider({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(true);
    const timerRef = useRef(null);
  
    const slideNext = useCallback(() => {
      setActiveIndex((prevIndex) => (prevIndex >= children.length - 1 ? 0 : prevIndex + 1));
    }, [children.length]);
  
    const slidePrev = useCallback(() => {
      setActiveIndex((prevIndex) => (prevIndex <= 0 ? children.length - 1 : prevIndex - 1));
    }, [children.length]);
  
    useEffect(() => {
      if (isSliding) {
        timerRef.current = setTimeout(() => {
          slideNext();
        }, 5000);
      }
  
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, [isSliding, slideNext]);
  
    const stopAutoPlay = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setIsSliding(false);
    };
  
    const startAutoPlay = () => {
      setIsSliding(true);
    };
  
    return (
      <div
        className="container-slider"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {children.map((item, index) => (
          <div
            className={`slider-item ${activeIndex === index ? 'slider-item-active' : ''}`}
            key={index}
          >
            {item}
          </div>
        ))}
  
        <div className="container-slider-links">
          {children.map((_, index) => (
            <button
              key={index}
              className={`container-slider-links-small ${activeIndex === index ? 'container-slider-links-small-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
  
        <button
          className="slider-btn-next"
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        >
          {">"}
        </button>
        <button
          className="slider-btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          {"<"}
        </button>
      </div>
    );
  }
  
  CustomSlider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default CustomSlider;