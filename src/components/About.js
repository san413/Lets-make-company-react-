import React from 'react';

const About = () => (
  <section id="about" className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>
            At BizServices, we are passionate about helping entrepreneurs and businesses navigate the legal and compliance landscape with ease.
          </p>
          <p>
            Our mission is to simplify company registration, streamline compliance processes, and provide valuable insights through our blogs and tools.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500x300" alt="About Us" className="img-fluid rounded shadow-sm" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
