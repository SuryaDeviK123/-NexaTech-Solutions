import "./ServiceDetails.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaReact,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import mobile from "../assets/images/mobile.jpg";

function MobileDevelopment() {
  const navigate = useNavigate();

  return (
    <section className="service-details">

      {/* Hero */}

      <motion.div
        className="service-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={mobile} alt="Mobile Development" />

        <div className="hero-content">
          <h1>Mobile App Development</h1>

          <p>
            We build powerful Android and iOS applications with modern
            technologies that provide smooth performance and an excellent
            user experience.
          </p>

          <button onClick={() => navigate("/contact")}>
            Start Your App
            <FaArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Services */}

      <section className="offer-section">

        <h2>Our Mobile Services</h2>

        <div className="offer-grid">

          <div>
            <FaAndroid />
            <h3>Android Apps</h3>
          </div>

          <div>
            <FaApple />
            <h3>iOS Apps</h3>
          </div>

          <div>
            <FaReact />
            <h3>React Native</h3>
          </div>

          <div>
            <FaMobileAlt />
            <h3>Cross Platform Apps</h3>
          </div>

        </div>

      </section>

      {/* Process */}

      <section className="process">

        <h2>Development Process</h2>

        <div className="process-grid">

          <div>1. Requirement Analysis</div>

          <div>2. UI Design</div>

          <div>3. App Development</div>

          <div>4. Testing</div>

          <div>5. Play Store Deployment</div>

        </div>

      </section>

      {/* Technologies */}

      <section className="technology">

        <h2>Technologies</h2>

        <div className="tech-grid">

          <div>
            <FaAndroid />
            Android
          </div>

          <div>
            <FaApple />
            iOS
          </div>

          <div>
            <FaReact />
            React Native
          </div>

          <div>
            <FaRocket />
            Firebase
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <h2>Our Success</h2>

        <div className="stats-grid">

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>200+</h1>
            <p>Apps Delivered</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>150+</h1>
            <p>Happy Clients</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>8+</h1>
            <p>Years Experience</p>
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
            <FaCheckCircle />
            Native & Hybrid Apps
          </p>

          <p>
            <FaCheckCircle />
            Fast Performance
          </p>

          <p>
            <FaCheckCircle />
            Secure Applications
          </p>

          <p>
            <FaCheckCircle />
            Lifetime Support
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">
          <h3>Do you build Android apps?</h3>
          <p>Yes, we build native Android applications.</p>
        </div>

        <div className="faq-box">
          <h3>Do you build iPhone apps?</h3>
          <p>Yes, we develop iOS applications as well.</p>
        </div>

        <div className="faq-box">
          <h3>Will you publish my app?</h3>
          <p>Yes, we publish apps to the Play Store and App Store.</p>
        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>Let's Build Your Mobile App</h2>

        <p>
          Turn your business idea into a modern mobile application.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>

      </section>

    </section>
  );
}

export default MobileDevelopment;