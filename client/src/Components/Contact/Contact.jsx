import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BASE_URL } from "../../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    try {
      await axios.post(`${BASE_URL}/api/contact/contact`, formData);
      setStatusMessage("Message sent successfully ✅");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Header */}
      <div className="contex">
        <div className="portfolio-title">
          <h2 className="contact-heading">CONTACT US</h2>
          <p className="subtitle">Start a conversation with DARTS AI ACADEMY</p>
        </div>

        {/* Contact Section */}
        <section className="contact-section">
          {/* Contact Info */}
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">CORPORATE OFFICE</h2>
            <p className="contact-text">
              AMBALATHARA, Thiruvananthapuram, Kerala 695009
            </p>
            <p className="contact-text">+91 7012045854</p>

            <p className="contact-texT">+91 79061638147</p>

            <h2 className="contact-title">Email</h2>
            <p className="contact-text">
              <FaEnvelope /> contact@Ibnsu.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="contact-title">Let's Talk....</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message <FaArrowRight />
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && <p className="status-msg">{statusMessage}</p>}
          </div>
        </section>

        {/* Google Maps */}
        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.2655543211356!2d76.94825657849823!3d8.447618899240686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb366c01b1c3%3A0xb6852604d8bd66e9!2sKovalam%20by%20pass%20road%20near%20poonthura%20puthen%20pally!5e0!3m2!1sen!2sin!4v1766399875382!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
          > </iframe>
            <a
              href="https://www.google.com/maps?q=INTERNATIONAL+BUSINESS+NETWORK+SOLUTIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-overlay"
              aria-label="Open in Google Maps"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
