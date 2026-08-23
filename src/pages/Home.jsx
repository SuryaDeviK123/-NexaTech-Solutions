import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Testimonials from "../components/Testimonials";

import hero from "../assets/images/hero.jpg";
import "./Home.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Meta",
  ];

  return (
    <PageTransition>

      {/* Hero Section */}

      <section className="hero">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="badge">
            🚀 Trusted by 250+ Businesses
          </span>

          <h1>
            Transforming Ideas Into
            <span> Digital Solutions</span>
          </h1>

          <p>
            We help businesses grow with innovative technology,
            creative design, and scalable digital solutions.
          </p>

          <div className="hero-btns">

            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/services")}
            >
              Explore Services
              <FaArrowRight />
            </button>

          </div>

          <div className="hero-features">

            <span>
              <FaCheckCircle />
              Innovative Technology
            </span>

            <span>
              <FaCheckCircle />
              Professional Team
            </span>

            <span>
              <FaCheckCircle />
              24/7 Support
            </span>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={hero}
            alt="Modern Technology Office"
          />

        </motion.div>

      </section>

      {/* Trusted Companies */}

      <section className="trusted">

        <h2>Trusted By Leading Companies</h2>

        <div className="company-grid">

          {companies.map((company, index) => (

            <motion.div
              key={index}
              className="company-card"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${company}`,
                  "_blank"
                )
              }
            >
              {company}
            </motion.div>

          ))}

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <motion.div
          className="stat-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaAward />
          <h2>10+</h2>
          <p>Years Experience</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers />
          <h2>250+</h2>
          <p>Happy Clients</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaProjectDiagram />
          <h2>500+</h2>
          <p>Projects Completed</p>
        </motion.div>

        <motion.div
          className="stat-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode />
          <h2>50+</h2>
          <p>Expert Developers</p>
        </motion.div>

      </section>

      {/* Testimonials */}

      <Testimonials />

      {/* Call To Action */}

      <section className="cta">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >

          <h2>
            Ready to Transform Your Business?
          </h2>

          <p>
            Let's build innovative digital solutions together.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>

        </motion.div>

      </section>

    </PageTransition>
  );
}

export default Home;