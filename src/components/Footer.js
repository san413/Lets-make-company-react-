import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <p className="mb-0">&copy; {new Date().getFullYear()} BizServices. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;