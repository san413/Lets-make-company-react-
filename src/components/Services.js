import React, { useState } from 'react';
import Calculator from './Calculator';

function Services() {
  const [showCalculator, setShowCalculator] = useState(false);

  const toggleCalculator = () => {
    setShowCalculator((prev) => !prev);  // Toggle the state
  };

  return (
    <div className="container my-5">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <h4>Company Registration</h4>
          <p>Start your business legally and efficiently.</p>
        </div>
        <div className="col-md-4">
          <h4>Compliance Tools</h4>
          <p>Use our calculators to stay compliant.</p>
          {/* Button to toggle Calculator */}
          <button className="btn btn-primary" onClick={toggleCalculator}>
            {showCalculator ? 'Hide Calculator' : 'Show Calculator'}
          </button>

          {/* Conditionally render the Calculator based on state */}
          {showCalculator && <Calculator />}
        </div>
        <div className="col-md-4">
          <h4>Blog & Guides</h4>
          <p>Stay informed with the latest legal updates.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
