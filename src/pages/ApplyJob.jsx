import "./ApplyJob.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaFileUpload,
  FaCheckCircle,
} from "react-icons/fa";

function ApplyJob() {
  const { job } = useParams();
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const applicationId =
    "NXT-" + Math.floor(100000 + Math.random() * 900000);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="apply-page">
        <div className="success-box">

          <FaCheckCircle className="success-icon" />

          <h1>Application Submitted!</h1>

          <p>
            Thank you for applying to
            <strong> NexaTech</strong>.
          </p>

          <h3>Application ID</h3>

          <h2>{applicationId}</h2>

          <p>
            Our HR team will review your application and
            contact you within 3-5 business days.
          </p>

          <button onClick={() => navigate("/careers")}>
            Back to Careers
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="apply-page">

      <div className="apply-wrapper">

        {/* Left Side */}

        <div className="company-info">

          <h2>Why Join NexaTech?</h2>

          <p>
            Build innovative software with a passionate
            engineering team.
          </p>

          <div className="benefit">
            ✅ Competitive Salary
          </div>

          <div className="benefit">
            ✅ Hybrid & Remote Work
          </div>

          <div className="benefit">
            ✅ Health Insurance
          </div>

          <div className="benefit">
            ✅ Learning & Certifications
          </div>

          <div className="benefit">
            ✅ Career Growth
          </div>

          <div className="benefit">
            ✅ Friendly Work Culture
          </div>

        </div>

        {/* Right Side */}

        <div className="apply-container">

          <h1>Join Our Team</h1>

          <p>
            Position:
            <span> {job.replace(/-/g, " ")}</span>
          </p>

          <form
            className="apply-form"
            onSubmit={handleSubmit}
          >

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="input-box">
              <FaPhone />
              <input
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="input-box">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="Current Location"
                required
              />
            </div>

            <div className="input-box">
              <FaGraduationCap />
              <input
                type="text"
                placeholder="Highest Qualification"
                required
              />
            </div>

            <div className="input-box">
              <FaCode />
              <input
                type="text"
                placeholder="Skills"
                required
              />
            </div>

            <div className="input-box">
              <FaGithub />
              <input
                type="url"
                placeholder="GitHub Profile"
              />
            </div>

            <div className="input-box">
              <FaLinkedin />
              <input
                type="url"
                placeholder="LinkedIn Profile"
              />
            </div>

            <div className="upload-box">
              <FaFileUpload />
              <label>Upload Resume</label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <textarea
              rows="5"
              placeholder="Why do you want to join NexaTech?"
              required
            ></textarea>

            <button type="submit">
              Submit Application
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ApplyJob;