import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand">
            <h3 className="footer-logo-text">DARTS AI Academy</h3>
            <p className="footer-text">
              Empowering future-ready professionals through AI-driven education,
              practical learning, and industry-focused training.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/Academy">Courses</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p>Email: www.dartsai.in</p>
            <p>Phone: +91 9188405527</p>
            <p>Location: Trivandrum Kerala, India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} DARTS AI Academy. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
