import axios from "axios";
import React, { useState } from "react";
import "./Quizregistration.css";
import { FaCalendar, FaLocationArrow, FaPhone, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";

const Quizregistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    place: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    try {
      await axios.post(`${BASE_URL}/api/quiz/quizRegistration`, formData);

      setStatusMessage("✅ User registered successfully!");
      setFormData({
        name: "",
        phone: "",
        age: "",
        place: "",
      });
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Failed to register user.");
      alert("❌ Failed to register user.");
    }
  };

  return (
    <div className="bod">
      <div className="container123">
        <div className="signup-box">
          <h2>REGISTER NOW</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="icon-circle">
                <FaUser />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="icon-circle">
                <FaPhone />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="icon-circle">
                <FaCalendar />
              </div>
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <div className="icon-circle">
                <FaLocationArrow />
              </div>
              <input
                type="text"
                name="place"
                placeholder="Place"
                value={formData.place}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="create-btn">
              Register
            </button>
          </form>
          {statusMessage && <p className="status-msg">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Quizregistration;
