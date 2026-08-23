import "./Careers.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaUsers
} from "react-icons/fa";

function Careers() {

  const navigate = useNavigate();

  const jobs = [

    {
      title: "Frontend Developer",
      slug: "frontend-developer",
      location: "Remote / Hyderabad",
      type: "Full Time",
      skills: "React, JavaScript, CSS"
    },

    {
      title: "Backend Developer",
      slug: "backend-developer",
      location: "Remote / Bangalore",
      type: "Full Time",
      skills: "Node.js, Python, APIs"
    },

    {
      title: "Machine Learning Engineer",
      slug: "machine-learning-engineer",
      location: "Hybrid",
      type: "Full Time",
      skills: "Python, ML, TensorFlow"
    },

    {
      title: "UI / UX Designer",
      slug: "ui-ux-designer",
      location: "Remote",
      type: "Internship",
      skills: "Figma, Design Systems"
    }

  ];

  return (

    <div className="careers-page">

      {/* Hero Section */}

      <section className="career-hero">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1>
            Build Your Future With <span>NexaTech</span>
          </h1>

          <p>
            Join our talented team and work on innovative technology
            solutions that shape the future.
          </p>

        </motion.div>

      </section>

      {/* Job Openings */}

      <section className="jobs-section">

        <h2>Current Openings</h2>

        <div className="jobs-grid">

          {jobs.map((job, index) => (

            <motion.div
              className="job-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
            >

              <div className="job-icon">
                <FaBriefcase />
              </div>

              <h3>{job.title}</h3>

              <p>
                <FaMapMarkerAlt />
                {" "}
                {job.location}
              </p>

              <p>
                <FaClock />
                {" "}
                {job.type}
              </p>

              <div className="skills">
                <strong>Skills:</strong>
                <br />
                {job.skills}
              </div>

              <button
                onClick={() => navigate(`/apply/${job.slug}`)}
              >
                Apply Now
              </button>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Benefits */}

      <section className="benefits">

        <h2>Why Work With Us?</h2>

        <div className="benefit-grid">

          <div>

            <FaUsers />

            <h3>Great Team</h3>

            <p>
              Work with experienced developers and innovators.
            </p>

          </div>

          <div>

            <FaBriefcase />

            <h3>Career Growth</h3>

            <p>
              Learn new technologies and grow your career with us.
            </p>

          </div>

          <div>

            <FaClock />

            <h3>Flexible Work</h3>

            <p>
              Maintain a healthy work-life balance.
            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Careers;