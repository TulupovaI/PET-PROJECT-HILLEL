import React from 'react';

const Slide = ({ image, isActive }) => (
  <div 
    className={`slide ${isActive ? 'active' : ''}`} 
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Your content here */}
  </div>
);

export default Slide;
