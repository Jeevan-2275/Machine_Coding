import { useState } from 'react';

function ToggleShowHide() {
  // State to track visibility of the text
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility when button is clicked
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState); // Flip the visibility state
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>Hello Coding's World </p>}  {/* Conditionally render text */}
    </div>
  );
}

export default ToggleShowHide;
