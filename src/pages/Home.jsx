import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaUserGraduate, FaUsers, FaCheckCircle } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">

        <div className="hero-bg"></div>
        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>

        <div className="container home-container">

          <motion.div
            className="home-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <span className="badge">
              Student Attendance Management System
            </span>

            <h1>
              Smart Student
              <span> Attendance Portal</span>
            </h1>

            <p>
              A modern attendance management system where faculty can register
              students, mark attendance and manage student records through an
              interactive dashboard.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Get Started
                <FaArrowRight />
              </button>

            </div>

            <div className="hero-stats">

              <div className="stat-card">
                <FaUsers />
                <h2>1200+</h2>
                <span>Students</span>
              </div>

              <div className="stat-card">
                <FaCheckCircle />
                <h2>98%</h2>
                <span>Attendance</span>
              </div>

              <div className="stat-card">
                <FaUserGraduate />
                <h2>12</h2>
                <span>Departments</span>
              </div>

            </div>

          </motion.div>

          <motion.div
            className="home-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <StudentForm />

          </motion.div>

        </div>

      </section>

    </>
  );
}

export default Home;