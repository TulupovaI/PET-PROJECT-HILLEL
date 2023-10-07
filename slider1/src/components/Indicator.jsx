import React from 'react';

const Indicator = ({ isActive }) => (
  <div className={`indicator ${isActive ? 'active' : ''}`} />
);

export default Indicator;
