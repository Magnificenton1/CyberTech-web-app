import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const TypingEffectComponent = ({ text, onTypingEnd }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 2); // Adjust delay as needed

      return () => clearTimeout(timeout);
    } else if (onTypingEnd) {
      onTypingEnd();
    }
  }, [index, text, onTypingEnd]);

  return <span dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

// Add PropTypes validation
TypingEffectComponent.propTypes = {
  text: PropTypes.string.isRequired, // 'text' must be a string and is required
  onTypingEnd: PropTypes.func, // 'onTypingEnd' must be a function, but is not required
};

export const TypingEffect =  memo(TypingEffectComponent);