import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          Nexa<span>Tech</span>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>

        {/* Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Services <FaChevronDown />
          </button>

          <ul className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
            <li>
              <NavLink
                to="/web-development"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Web Development
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mobile-development"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Mobile Development
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cloud-solutions"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Cloud Solutions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/artificial-intelligence"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Artificial Intelligence
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/uiux-design"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                UI / UX Design
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/digital-marketing"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Digital Marketing
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;