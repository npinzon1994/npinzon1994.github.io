import React, { useState } from 'react';
import './SlidingDiv.css'; // Import CSS file for styling

const SlidingDiv = () => {
  const [slideRight, setSlideRight] = useState(false);

  const handleButtonClick = () => {
    setSlideRight(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Slide</button>
      <div
        className={`sliding-div ${slideRight ? 'slide-right' : ''}`}
      >
        {/* Content of the sliding div */}
      </div>
    </div>
  );
};

export default SlidingDiv;