import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import './slider.css'


import React from 'react';
import Slider from './components/Slider';

const App = () => {
  const slides = [
    { image: 'path_to_image1.jpg' },
    { image: 'path_to_image2.jpg' },
    { image: 'path_to_image3.jpg' },
    { image: 'path_to_image4.jpg' }
  ];

  return (
    <div className="app">
      <Slider slides={slides} />
    </div>
  );
};

export default App;
