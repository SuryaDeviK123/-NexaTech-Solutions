import "./ServiceDetails.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaAws,
} from "react-icons/fa";

import cloud from "../assets/images/cloud.jpg";

function CloudSolutions() {
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
        <img src={cloud} alt="Cloud Solutions" />

        <div className="hero-content">

          <h1>Cloud Solutions</h1>

          <p>
            Scale your business with secure, reliable and modern cloud
            infrastructure. We help companies migrate, manage and optimize
            cloud environments.
          </p>

          <button onClick={() => navigate("/contact")}>
            Get Free Consultation
            <FaArrowRight />
          </button>

        </div>
      </motion.div>

      {/* Services */}

      <section className="offer-section">

        <h2>What We Offer</h2>

        <div className="offer-grid">

          <div>
            <FaCloud />
            <h3>Cloud Migration</h3>
          </div>

          <div>
            <FaServer />
            <h3>Cloud Hosting</h3>
          </div>

          <div>
            <FaDatabase />
            <h3>Database Management</h3>
          </div>

          <div>
            <FaShieldAlt />
            <h3>Cloud Security</h3>
          </div>

        </div>

      </section>

      {/* Process */}

      <section className="process">

        <h2>Our Process</h2>

        <div className="process-grid">

          <div>1. Assessment</div>

          <div>2. Planning</div>

          <div>3. Migration</div>

          <div>4. Testing</div>

          <div>5. Monitoring</div>

        </div>

      </section>

      {/* Technologies */}

      <section className="technology">

        <h2>Cloud Technologies</h2>

        <div className="tech-grid">

          <div>
            <FaAws />
            AWS
          </div>

          <div>
            <FaCloud />
            Microsoft Azure
          </div>

          <div>
            <FaServer />
            Google Cloud
          </div>

          <div>
            <FaDatabase />
            Docker
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <h2>Our Achievements</h2>

        <div className="stats-grid">

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>300+</h1>
            <p>Cloud Projects</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>150+</h1>
            <p>Enterprise Clients</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>99.9%</h1>
            <p>Server Uptime</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>24/7</h1>
            <p>Cloud Support</p>
          </motion.div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why">

        <h2>Why Choose NexaTech?</h2>

        <div className="why-grid">

          <p>
            <FaCheckCircle />
            Certified Cloud Experts
          </p>

          <p>
            <FaCheckCircle />
            Secure Infrastructure
          </p>

          <p>
            <FaCheckCircle />
            High Availability
          </p>

          <p>
            <FaCheckCircle />
            24/7 Monitoring
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">

          <h3>Which cloud platforms do you support?</h3>

          <p>
            We support AWS, Microsoft Azure and Google Cloud Platform.
          </p>

        </div>

        <div className="faq-box">

          <h3>Is cloud migration safe?</h3>

          <p>
            Yes. We follow secure migration practices with minimal downtime.
          </p>

        </div>

        <div className="faq-box">

          <h3>Do you provide cloud maintenance?</h3>

          <p>
            Yes. We provide monitoring, backups and ongoing maintenance.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>Move Your Business to the Cloud</h2>

        <p>
          Modernize your infrastructure with secure cloud solutions.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>

      </section>

    </section>
  );
}

export default CloudSolutions;