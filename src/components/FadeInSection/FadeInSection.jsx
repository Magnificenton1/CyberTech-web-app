import { useRef, useState, useEffect, useContext, createContext } from 'react';
import './FadeInSection.css';
import PropTypes from 'prop-types';

const VisibilityContext = createContext();

export const FadeInSection = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after the element is visible
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => observer.unobserve(current);
  }, []);

  return (
    <VisibilityContext.Provider value={setIsVisible}>
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    </VisibilityContext.Provider>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useVisibility = () => useContext(VisibilityContext);


  FadeInSection.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is a valid React node
  };
