import React from 'react';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">BizServices</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to Business Services Site</h1>
          <p className="lead">Company Registration, Compliance, Blogs & More</p>
          <a className="btn btn-light btn-lg mt-3" href="#services">
            Explore Services
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            {[
              {
                title: "Company Registration",
                text: "Start your business legally and efficiently.",
              },
              {
                title: "Compliance Tools",
                text: "Use our calculators to stay compliant.",
              },
              {
                title: "Blog & Guides",
                text: "Stay informed with the latest legal updates.",
              },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                At BizServices, we help entrepreneurs navigate the legal and compliance landscape with ease.
              </p>
              <p>
                Our team of professionals delivers reliable and efficient solutions to support your business journey.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x300"
                alt="About Us"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} BizServices. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
