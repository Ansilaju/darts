import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "./JobData.js";
import "./JobDetail.css";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <p>Job not found</p>;

  return (
    <section className="job-detail-page">
      <div className="job-detail-container">
        <Link to="/Career" className="back-link">
          ← Back to Careers
        </Link>
        <div className="job-header">
          <img src={job.logo} alt={job.title} className="job-detail-logo" />
          <h2>{job.title}</h2>
          <p>
            <span>Opening: {job.openingDate}</span> |{" "}
            <span>Closing: {job.closingDate}</span>
          </p>
        </div>
        <div className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>

          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>

          <h3>Skills</h3>
          <ul>
            {job.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="cont">
          <h3 className="">Upload Your Resume to:</h3>
          <p>
            Email:{" "}
            <a href={`mailto:${job.email}`} className="text">
              {job.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
