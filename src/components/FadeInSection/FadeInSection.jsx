import { useRef, useState, useEffect } from 'react';
import './FadeInSection.css';

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
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
