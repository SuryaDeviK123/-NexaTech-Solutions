import "./ServiceDetails.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaLaptopCode,
  FaCheckCircle,
  FaArrowRight,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

import building from "../assets/images/building.jpg";

function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <section className="service-details">
      {/* Hero Section */}
      <motion.div
        className="service-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={building} alt="Web Development" />

        <div className="hero-content">
          <h1>Professional Web Development</h1>

          <p>
            We design and develop high-performance websites that are
            responsive, secure, and built to help businesses grow.
          </p>

          <button onClick={() => navigate("/contact")}>
            Get Free Consultation <FaArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Services */}
      <section className="offer-section">
        <h2>What We Offer</h2>

        <div className="offer-grid">
          <div>
            <FaLaptopCode />
            <h3>Business Websites</h3>
          </div>

          <div>
            <FaMobileAlt />
            <h3>Responsive Design</h3>
          </div>

          <div>
            <FaRocket />
            <h3>Fast Performance</h3>
          </div>

          <div>
            <FaShieldAlt />
            <h3>Secure Applications</h3>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <h2>Our Development Process</h2>

        <div className="process-grid">
          <div>1. Planning</div>
          <div>2. UI / UX Design</div>
          <div>3. Development</div>
          <div>4. Testing</div>
          <div>5. Deployment</div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technology">
        <h2>Technologies We Use</h2>

        <div className="tech-grid">
          <div>
            <FaHtml5 />
            <span>HTML5</span>
          </div>

          <div>
            <FaCss3Alt />
            <span>CSS3</span>
          </div>

          <div>
            <FaReact />
            <span>React</span>
          </div>

          <div>
            <FaNodeJs />
            <span>Node.js</span>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="stats-section">
        <h2>Our Achievements</h2>

        <div className="stats-grid">
          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>500+</h1>
            <p>Projects Completed</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>250+</h1>
            <p>Happy Clients</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>10+</h1>
            <p>Years of Experience</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>99%</h1>
            <p>Client Satisfaction</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why">
        <h2>Why Choose NexaTech?</h2>

        <div className="why-grid">
          <p>
            <FaCheckCircle /> 10+ Years of Experience
          </p>

          <p>
            <FaCheckCircle /> 500+ Successful Projects
          </p>

          <p>
            <FaCheckCircle /> 250+ Happy Clients
          </p>

          <p>
            <FaCheckCircle /> 24/7 Technical Support
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">
          <h3>How long does development take?</h3>
          <p>Usually between 2–6 weeks, depending on the project.</p>
        </div>

        <div className="faq-box">
          <h3>Will my website work on mobile devices?</h3>
          <p>Yes. Every website we build is fully responsive.</p>
        </div>

        <div className="faq-box">
          <h3>Do you provide maintenance?</h3>
          <p>Yes. We provide regular updates and ongoing support.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Build Your Dream Website?</h2>

        <p>
          Let's discuss your project and create something amazing together.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </section>
  );
}

export default WebDevelopment;