import React, { useState } from "react";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    { category: "courses", img: "/mern new.webp" },
    { category: "courses", img: "/vfxdarts.webp" },
    { category: "poster", img: "/poster7.webp" },
    { category: "poster", img: "/poster8.webp" },

    { category: "poster", img: "/poster10.webp" },

    { category: "website", img: "/vivo.webp" },
    { category: "website", img: "/amk.webp" },
    { category: "website", img: "/ibm.webp" },
    { category: "courses", img: "/DARTIMG2.webp" },

    {
      category: "courses",
      img: "/DARTIMGQ.webp",
    },
  ];

  const categories = [
    { name: "ALL", value: "all" },
    { name: "WEBSITE", value: "website" },
    { name: "POSTER", value: "poster" },
    { name: "COURSES", value: "courses" },
  ];

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">
        <div className="head text-center">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="portp text-center">
          <p>
            At DARTS, we deliver creative and result-driven digital solutions to
            help businesses build a strong online and offline presence. Our
            portfolio showcases the diversity of our work – from eye-catching
            visuals to high-performing digital platforms.
          </p>
        </div>

        <ul className="portfolio-nav">
          {categories.map((cat, index) => (
            <li key={index}>
              <button
                className={`portfolio-btn ${
                  filter === cat.value ? "active" : ""
                }`}
                onClick={() => setFilter(cat.value)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="portfolio-grid">
          {portfolioItems
            .filter((item) => filter === "all" || item.category === filter)
            .map((item, index) => (
              <div key={index} className="portfolio-card">
                {item.img ? (
                  <img
                    className="portfolio-img"
                    src={item.img}
                    alt={item.category}
                    loading="lazy"
                  />
                ) : (
                  <div className="placeholder">No Image</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
