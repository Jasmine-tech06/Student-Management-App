import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaPlay, FaUserGraduate, FaChalkboardTeacher, FaUniversity } from "react-icons/fa";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <section className="welcome">

      <div className="welcome-shape shape1"></div>
      <div className="welcome-shape shape2"></div>

      <div className="container welcome-container">

        <motion.div
          className="welcome-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="tag">
            🎓 Smart Student Management Portal
          </span>

          <h1>
            Manage Students
            <br />
            <span>Smarter & Faster</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Student Records",
              2000,
              "Attendance Tracking",
              2000,
              "Academic Performance",
              2000,
              "Department Management",
              2000,
            ]}
            wrapper="h2"
            speed={60}
            repeat={Infinity}
            className="typing-text"
          />

          <p>
            A modern and interactive student management platform that helps
            colleges efficiently organize student records, monitor academic
            performance, manage attendance, and streamline administrative
            tasks through an elegant dashboard.
          </p>

          <div className="welcome-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/home")}
            >
              Get Started
              <FaArrowRight />
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/records")}
            >
              <FaPlay />
              Watch Demo
            </button>

          </div>

        </motion.div>

        <motion.div
          className="welcome-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="glass-card card1">
            <div className="card-icon-wrap">
              <FaUserGraduate className="card-icon" />
            </div>
            <h2>1200+</h2>
            <p>Students</p>
          </div>

          <div className="glass-card card2">
            <div className="card-icon-wrap">
              <FaChalkboardTeacher className="card-icon" />
            </div>
            <h2>85+</h2>
            <p>Faculty</p>
          </div>

          <div className="glass-card card3">
            <div className="card-icon-wrap">
              <FaUniversity className="card-icon" />
            </div>
            <h2>12</h2>
            <p>Departments</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Welcome;