import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowRight
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* Company Information */}

        <div className="footer-section">

          <h2>
            Nexa<span>Tech</span>
          </h2>

          <p>
            We provide modern technology solutions including
            web development, cloud services, artificial intelligence,
            and digital transformation for businesses.
          </p>


          <div className="social-icons">

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>



        {/* Quick Links */}

        <div className="footer-section">

          <h3>
            Quick Links
          </h3>


          <ul>

            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>


            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>


            <li>
              <NavLink to="/portfolio">
                Portfolio
              </NavLink>
            </li>


            <li>
              <NavLink to="/careers">
                Careers
              </NavLink>
            </li>


            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

        </div>




        {/* Services */}

        <div className="footer-section">

          <h3>
            Services
          </h3>


          <ul>

            <li>
              <NavLink to="/web-development">
                Web Development
              </NavLink>
            </li>


            <li>
              <NavLink to="/mobile-development">
                Mobile Development
              </NavLink>
            </li>


            <li>
              <NavLink to="/cloud-solutions">
                Cloud Solutions
              </NavLink>
            </li>


            <li>
              <NavLink to="/artificial-intelligence">
                AI Solutions
              </NavLink>
            </li>


            <li>
              <NavLink to="/uiux-design">
                UI / UX Design
              </NavLink>
            </li>


          </ul>

        </div>




        {/* Newsletter */}

        <div className="footer-section newsletter">

          <h3>
            Newsletter
          </h3>


          <p>
            Subscribe to get latest updates and technology news.
          </p>


          <div className="subscribe-box">

            <input
              type="email"
              placeholder="Enter your email"
            />


            <button>
              <FaArrowRight />
            </button>

          </div>


        </div>



      </div>



      {/* Copyright */}

      <div className="copyright">

        <p>
          © 2026 NexaTech. All Rights Reserved.
        </p>

      </div>


    </footer>

  );

}


export default Footer;