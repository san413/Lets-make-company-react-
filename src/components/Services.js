import React from 'react';

const Services = () => (
  <section id="services" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Company Registration</h5>
              <p className="card-text">Start your business legally and efficiently.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Compliance Tools</h5>
              <p className="card-text">Use our calculators to stay compliant.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Blog & Guides</h5>
              <p className="card-text">Stay informed with the latest legal updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
