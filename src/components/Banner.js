import React, { useState } from 'react';
import './Banner.css';

const Banner = ({ title }) => {
  return (
    <div className="Banner">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Banner;
