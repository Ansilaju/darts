import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./about.css";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleVision = () => setIsVisionVisible(!isVisionVisible);
  const toggleMission = () => setIsMissionVisible(!isMissionVisible);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "What is DARTS AI Academy?",
      answer:
        "DARTS AI Academy is a future-focused learning platform that empowers students and professionals with industry-ready skills in AI Digital Marketing, MERN Stack Development, Web Technologies, VFX, and Cyber Security.",
    },
    {
      question: "Who can join DARTS AI Academy?",
      answer:
        "Anyone can join — students, freshers, working professionals, business owners, and career switchers who want practical, job-oriented tech and AI skills.",
    },
    {
      question: "Do you provide practical training?",
      answer:
        "Yes. Our courses focus on hands-on projects, real-world case studies, live tools, and industry workflows to ensure students gain real experience.",
    },
    {
      question: "What courses do you offer?",
      answer:
        "We offer AI Digital Marketing, MERN Stack & Web Development, VFX, and Cyber Security programs designed to match current industry demands.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes. Upon successful completion, students receive industry-recognized certificates that strengthen their career profile.",
    },
    {
      question: "How can I contact DARTS AI Academy?",
      answer:
        "You can reach us through our Contact page or directly connect with our support team. We’re always happy to guide you.",
    },
  ];

  return (
    <div className="mainabout" data-aos="fade-right">
      <div className="abouthed">
        <h2 className="section__titlee">ABOUT US</h2>
        <p>
          A next-generation AI & technology academy built to shape future-ready
          professionals.
          <br />
          DARTS AI Academy bridges education and industry with practical,
          skill-driven learning.
        </p>
      </div>

      <div className="aboutbod" data-aos="fade-right">
        <h1>LEARN. BUILD. TRANSFORM.</h1>
         <p>
    DARTS AI Academy is a professional learning platform focused on next-gen
    technologies and creative skills. We train students, professionals, and
    entrepreneurs through hands-on courses, expert mentorship, and real-world
    projects.

    Our programs in AI Digital Marketing, MERN Stack & Web Development,
    VFX, and Cyber Security are designed to help learners build strong
    careers in today’s fast-changing digital world.

    We believe learning should be practical, affordable, and career
    focused. With live tools, AI-powered workflows, and industry-aligned
    curriculum, DARTS helps you stay ahead, confident, and job-ready.
  </p>

  <p>
    At DartsAI Academy, we are redefining how darts is learned, practiced,
    and mastered by blending cutting-edge Artificial Intelligence with
    performance-driven coaching. Our mission is to empower players of all
    skill levels — from beginners to seasoned competitors — with
    next-generation AI tools and insights.

    Using advanced AI analytics and computer vision technology, our platform
    analyzes your throws, evaluates accuracy, stance, and scoring patterns,
    and delivers data-backed feedback so you can train smarter, not harder.

    Join a growing community of darts enthusiasts improving their game with
    AI-driven analysis, training programs, and performance tools.
  </p> </div>

      <div className="aboutgro" data-aos="fade-right">
        <div className="gaa">
          <div className="aboutvismis">
            <h3>OUR VISION</h3>
            <button className="btn-vision" onClick={toggleVision}>
              Explore Our Vision
            </button>

            {isVisionVisible && (
              <p>
                To become a leading AI and technology academy that empowers
                learners with future-proof skills through innovation,
                creativity, and ethical education.
              </p>
            )}
            {isVisionVisible && (
              <p>
                To create a global community of skilled professionals ready to
                lead the digital, AI, and creative industries of tomorrow.
              </p>
            )}
          </div>

          <div className="vis"></div>

          <div className="aboutvismi">
            <h3>OUR MISSION</h3>
            <button className="btn-mission" onClick={toggleMission}>
              Join Our Mission
            </button>

            {isMissionVisible && (
              <p>
                To deliver practical, industry-relevant education using modern
                tools, real projects, and AI-driven learning methods.
              </p>
            )}
            {isMissionVisible && (
              <p>
                To guide learners from basics to advanced skills, helping them
                gain confidence, experience, and career success.
              </p>
            )}
          </div>
        </div>
      </div>

      <section className="mission-section" data-aos="fade-right">
        <div className="mission-container">
          <div className="mission-box">
            <h3>OUR TARGET</h3>
            <p>
              To train students and professionals with job-ready skills in AI,
              technology, and creative fields.
            </p>
          </div>
          <div className="mission-box">
            <h3>OUR AIM</h3>
            <p>
              To bridge the gap between education and industry through
              practical, hands-on, and mentorship-driven learning.
            </p>
          </div>
          <div className="mission-box">
            <h3>OUR DIRECTION</h3>
            <p>
              Building a strong ecosystem of skilled learners, mentors, and
              industry partners focused on growth and innovation.
            </p>
          </div>
        </div>
      </section>

      <div className="faq-section" data-aos="fade-right">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about DARTS AI Academy
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className={`faq-question ${
                    openIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
