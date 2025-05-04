import React from 'react';

function Hero({ title, subtitle }) {
  return (
    <div className="bg-primary text-white text-center py-5">
      <h1>{title}</h1>
      <p className="lead">{subtitle}</p>
    </div>
  );
}

export default Hero;
