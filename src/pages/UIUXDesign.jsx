import "./ServiceDetails.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaPaintBrush,
  FaMobileAlt,
  FaDesktop,
  FaLayerGroup,
  FaFigma,
  FaSketch,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

import uiux from "../assets/images/uiux.jpg";


function UIUXDesign() {

  const navigate = useNavigate();


  return (

    <section className="service-details">


      {/* Hero Section */}

      <motion.div
        className="service-hero"
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
      >

        <img src={uiux} alt="UI UX Design"/>


        <div className="hero-content">

          <h1>UI/UX Design Services</h1>

          <p>
            Create beautiful, user-friendly digital experiences
            with modern UI/UX design solutions. We design websites
            and applications that improve user engagement and business growth.
          </p>


          <button onClick={()=>navigate("/contact")}>

            Start Your Design Project
            <FaArrowRight/>

          </button>


        </div>


      </motion.div>



      {/* Services */}

      <section className="offer-section">


        <h2>Our UI/UX Design Services</h2>


        <div className="offer-grid">


          <div>

            <FaPaintBrush/>

            <h3>Website Design</h3>

          </div>



          <div>

            <FaMobileAlt/>

            <h3>Mobile App Design</h3>

          </div>



          <div>

            <FaDesktop/>

            <h3>Dashboard Design</h3>

          </div>



          <div>

            <FaLayerGroup/>

            <h3>Design Systems</h3>

          </div>


        </div>


      </section>




      {/* Process */}


      <section className="process">


        <h2>Our Design Process</h2>


        <div className="process-grid">


          <div>
            1. User Research
          </div>


          <div>
            2. Wireframing
          </div>


          <div>
            3. Prototype Creation
          </div>


          <div>
            4. UI Design
          </div>


          <div>
            5. Testing & Improvements
          </div>


        </div>


      </section>





      {/* Tools */}


      <section className="technology">


        <h2>Design Tools We Use</h2>


        <div className="tech-grid">


          <div>

            <FaFigma/>

            Figma

          </div>



          <div>

            <FaSketch/>

            Sketch

          </div>



          <div>

            <FaGlobe/>

            Adobe XD

          </div>



          <div>

            <FaLayerGroup/>

            Photoshop

          </div>


        </div>


      </section>





      {/* Statistics */}


      <section className="stats-section">


        <h2>Our Design Achievements</h2>


        <div className="stats-grid">


          <motion.div
            className="stat-box"
            whileHover={{scale:1.05}}
          >

            <h1>300+</h1>

            <p>
              Projects Designed
            </p>

          </motion.div>



          <motion.div
            className="stat-box"
            whileHover={{scale:1.05}}
          >

            <h1>200+</h1>

            <p>
              Happy Clients
            </p>

          </motion.div>



          <motion.div
            className="stat-box"
            whileHover={{scale:1.05}}
          >

            <h1>95%</h1>

            <p>
              User Satisfaction
            </p>

          </motion.div>



          <motion.div
            className="stat-box"
            whileHover={{scale:1.05}}
          >

            <h1>24/7</h1>

            <p>
              Design Support
            </p>

          </motion.div>


        </div>


      </section>





      {/* Why Choose */}


      <section className="why">


        <h2>
          Why Choose NexaTech?
        </h2>


        <div className="why-grid">


          <p>

            <FaCheckCircle/>

            Creative Design Team

          </p>



          <p>

            <FaCheckCircle/>

            User-Centered Approach

          </p>



          <p>

            <FaCheckCircle/>

            Modern Design Trends

          </p>



          <p>

            <FaCheckCircle/>

            Responsive Designs

          </p>



        </div>


      </section>





      {/* FAQ */}


      <section className="faq">


        <h2>
          Frequently Asked Questions
        </h2>



        <div className="faq-box">


          <h3>
            What is UI/UX Design?
          </h3>


          <p>
            UI/UX Design focuses on creating attractive interfaces
            and improving user experience while using websites and apps.
          </p>


        </div>




        <div className="faq-box">


          <h3>
            Which tools do you use for design?
          </h3>


          <p>
            We use modern tools like Figma, Adobe XD,
            Sketch, and Photoshop.
          </p>


        </div>





        <div className="faq-box">


          <h3>
            Do you design mobile applications?
          </h3>


          <p>
            Yes. We create responsive and user-friendly mobile app designs.
          </p>


        </div>



      </section>





      {/* CTA */}


      <section className="cta-section">


        <h2>
          Need a Modern UI/UX Design?
        </h2>


        <p>
          Transform your ideas into beautiful digital experiences
          with NexaTech design solutions.
        </p>



        <button onClick={()=>navigate("/contact")}>

          Contact Us

        </button>



      </section>



    </section>

  );

}


export default UIUXDesign;