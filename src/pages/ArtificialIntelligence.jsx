import "./ServiceDetails.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaDatabase,
  FaCheckCircle,
  FaArrowRight,
  FaPython,
  FaCode,
  FaRocket,
  FaCogs,
} from "react-icons/fa";

import ai from "../assets/images/ai.jpg";

function ArtificialIntelligence() {
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
        <img src={ai} alt="Artificial Intelligence" />

        <div className="hero-content">
          <h1>Artificial Intelligence Solutions</h1>

          <p>
            We develop intelligent AI-powered solutions that automate
            business processes, improve productivity, and deliver
            data-driven insights for better decision making.
          </p>

          <button onClick={() => navigate("/contact")}>
            Get Free Consultation
            <FaArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Services */}

      <section className="offer-section">

        <h2>AI Services</h2>

        <div className="offer-grid">

          <div>
            <FaRobot />
            <h3>AI Chatbots</h3>
          </div>

          <div>
            <FaBrain />
            <h3>Machine Learning</h3>
          </div>

          <div>
            <FaChartLine />
            <h3>Predictive Analytics</h3>
          </div>

          <div>
            <FaDatabase />
            <h3>Data Processing</h3>
          </div>

        </div>

      </section>

      {/* Development Process */}

      <section className="process">

        <h2>Our AI Development Process</h2>

        <div className="process-grid">

          <div>1. Requirement Analysis</div>

          <div>2. Data Collection</div>

          <div>3. Model Development</div>

          <div>4. Testing & Evaluation</div>

          <div>5. Deployment</div>

        </div>

      </section>

      {/* Technologies */}

      <section className="technology">

        <h2>Technologies We Use</h2>

        <div className="tech-grid">

          <div>
            <FaPython />
            Python
          </div>

          <div>
            <FaBrain />
            TensorFlow
          </div>

          <div>
            <FaCode />
            OpenCV
          </div>

          <div>
            <FaCogs />
            Scikit-Learn
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <h2>Our AI Achievements</h2>

        <div className="stats-grid">

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>120+</h1>
            <p>AI Projects</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>95%</h1>
            <p>Model Accuracy</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>80+</h1>
            <p>Enterprise Clients</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>24/7</h1>
            <p>AI Support</p>
          </motion.div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why">

        <h2>Why Choose NexaTech?</h2>

        <div className="why-grid">

          <p>
            <FaCheckCircle />
            AI Experts
          </p>

          <p>
            <FaCheckCircle />
            Modern ML Models
          </p>

          <p>
            <FaCheckCircle />
            Secure AI Solutions
          </p>

          <p>
            <FaCheckCircle />
            End-to-End Deployment
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">
          <h3>What AI services do you provide?</h3>

          <p>
            We build chatbots, recommendation systems, predictive analytics,
            automation tools, and machine learning solutions.
          </p>
        </div>

        <div className="faq-box">
          <h3>Can AI improve business efficiency?</h3>

          <p>
            Yes. AI automates repetitive tasks and helps businesses make
            faster, data-driven decisions.
          </p>
        </div>

        <div className="faq-box">
          <h3>Do you provide AI maintenance?</h3>

          <p>
            Yes. We continuously monitor, update, and improve AI models
            after deployment.
          </p>
        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>Ready to Transform Your Business with AI?</h2>

        <p>
          Let our AI experts build intelligent solutions that accelerate
          your business growth.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>

      </section>

    </section>
  );
}

export default ArtificialIntelligence;