import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Indicator from './Indicator';

const Slider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <Slide key={index} image={slide.image} isActive={index === activeSlide} />
      ))}
      <div className="indicators">
        {slides.map((_, index) => (
          <Indicator key={index} isActive={index === activeSlide} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
