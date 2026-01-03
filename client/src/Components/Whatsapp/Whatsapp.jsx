import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const Whatsapp = () => {
  const phoneNumber = "9188405527";
  const message = encodeURIComponent(
    "Hello! I would like to know more about your AI Academy courses.Please let me know about further information."
  );
  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default Whatsapp;
