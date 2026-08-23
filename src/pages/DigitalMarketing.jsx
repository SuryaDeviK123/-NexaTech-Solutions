import "./ServiceDetails.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaFacebook,
  FaGoogle,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";

import marketing from "../assets/images/marketing.jpg";

function DigitalMarketing() {
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
        <img src={marketing} alt="Digital Marketing" />

        <div className="hero-content">

          <h1>Digital Marketing Services</h1>

          <p>
            Grow your business with result-driven digital marketing
            strategies. We help increase your online visibility,
            generate quality leads, and improve conversions.
          </p>

          <button onClick={() => navigate("/contact")}>
            Grow Your Business
            <FaArrowRight />
          </button>

        </div>

      </motion.div>

      {/* Services */}

      <section className="offer-section">

        <h2>Our Marketing Services</h2>

        <div className="offer-grid">

          <div>
            <FaSearch />
            <h3>SEO Optimization</h3>
          </div>

          <div>
            <FaBullhorn />
            <h3>Social Media Marketing</h3>
          </div>

          <div>
            <FaGoogle />
            <h3>Google Ads</h3>
          </div>

          <div>
            <FaEnvelope />
            <h3>Email Marketing</h3>
          </div>

        </div>

      </section>

      {/* Process */}

      <section className="process">

        <h2>Our Marketing Process</h2>

        <div className="process-grid">

          <div>1. Market Research</div>

          <div>2. Strategy Planning</div>

          <div>3. Campaign Launch</div>

          <div>4. Performance Tracking</div>

          <div>5. Optimization</div>

        </div>

      </section>

      {/* Technologies */}

      <section className="technology">

        <h2>Marketing Platforms</h2>

        <div className="tech-grid">

          <div>
            <FaGoogle />
            Google Ads
          </div>

          <div>
            <FaFacebook />
            Facebook Ads
          </div>

          <div>
            <FaGlobe />
            SEO Tools
          </div>

          <div>
            <FaChartLine />
            Google Analytics
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
            <h1>1000+</h1>
            <p>Marketing Campaigns</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>500+</h1>
            <p>Happy Clients</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>98%</h1>
            <p>Success Rate</p>
          </motion.div>

          <motion.div
            className="stat-box"
            whileHover={{ scale: 1.05 }}
          >
            <h1>24/7</h1>
            <p>Marketing Support</p>
          </motion.div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why">

        <h2>Why Choose NexaTech?</h2>

        <div className="why-grid">

          <p>
            <FaCheckCircle />
            SEO Experts
          </p>

          <p>
            <FaCheckCircle />
            ROI Focused Campaigns
          </p>

          <p>
            <FaCheckCircle />
            Certified Marketing Team
          </p>

          <p>
            <FaCheckCircle />
            Monthly Performance Reports
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">

          <h3>How long does SEO take?</h3>

          <p>
            SEO results typically start appearing within 3 to 6 months,
            depending on your industry and competition.
          </p>

        </div>

        <div className="faq-box">

          <h3>Do you manage social media accounts?</h3>

          <p>
            Yes. We create content, manage campaigns, and monitor
            performance across all major platforms.
          </p>

        </div>

        <div className="faq-box">

          <h3>Will I receive performance reports?</h3>

          <p>
            Absolutely. We provide detailed monthly reports and campaign
            analytics.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>Ready to Grow Your Business Online?</h2>

        <p>
          Partner with NexaTech and achieve measurable business growth
          through powerful digital marketing strategies.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>

      </section>

    </section>
  );
}

export default DigitalMarketing;