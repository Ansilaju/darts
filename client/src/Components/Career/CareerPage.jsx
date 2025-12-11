import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "./JobData.js";
import "./CareerPage.css";

const CareerPage = () => {
  return (
    <section className="career-page">
      <div className="career-container">
        <h2 className="career-title">Current Openings</h2>
        <p className="career-subtitle">
          Explore our latest job opportunities and kickstart your career journey
          with us.
        </p>

        <div className="career-cards">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.id}`}
              className="career-card-link"
            >
              <div className="career-card">
                <img src={job.logo} alt={job.title} className="job-logo" />
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p>
                    <span>Opening: {job.openingDate}</span> |{" "}
                    <span>Closing: {job.closingDate}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
