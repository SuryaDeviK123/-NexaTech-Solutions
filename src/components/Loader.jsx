import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (

    <nav className="navbar">


      <div className="logo">
        Nexa<span>Tech</span>
      </div>



      <ul className={menuOpen ? "nav-links active" : "nav-links"}>


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




        {/* Services Dropdown */}

        <li
          className="dropdown"

          onMouseEnter={() => setDropdownOpen(true)}

          onMouseLeave={() => setDropdownOpen(false)}

        >


          <span
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >

            Services

            <FaChevronDown />

          </span>




          <ul
            className={
              dropdownOpen
              ? "dropdown-menu show"
              : "dropdown-menu"
            }
          >


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
                Artificial Intelligence
              </NavLink>
            </li>


            <li>
              <NavLink to="/uiux-design">
                UI / UX Design
              </NavLink>
            </li>


            <li>
              <NavLink to="/digital-marketing">
                Digital Marketing
              </NavLink>
            </li>


          </ul>


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





      <div
        className="menu-icon"

        onClick={() => setMenuOpen(!menuOpen)}

      >

        {
          menuOpen
          ?
          <FaTimes />
          :
          <FaBars />
        }


      </div>


    </nav>

  );

}


export default Navbar;