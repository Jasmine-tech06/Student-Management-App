import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaGraduationCap,
  FaHome,
  FaTable,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/hit-logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container nav-container">

        <div className="logo-section">

          <img
            src={logo}
            alt="College Logo"
            className="logo-img"
          />

          <div className="logo-content">
            <h2>Student Portal</h2>
            <p>Attendance Management System</p>
          </div>

        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink
            to="/home"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/records"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <FaTable />
            Records
          </NavLink>

        </nav>

        <div className="nav-right">

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="login-btn">
            <FaGraduationCap />
            Student Portal
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;