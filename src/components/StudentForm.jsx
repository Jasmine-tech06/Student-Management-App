import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../context/StudentContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import {
  FaIdCard,
  FaUser,
  FaBuilding,
  FaLayerGroup,
  FaPaperPlane,
} from "react-icons/fa";

import "../styles/form.css";

function StudentForm() {

  const navigate = useNavigate();

  const { students, addStudent } = useStudent();

  const [showStatus, setShowStatus] = useState(false);

  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
    division: "",
    status: "Absent",
  });

  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });

  };

  const setStatus = (status) => {

    setStudent({
      ...student,
      status,
    });

    setShowStatus(false);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const duplicate = students.find(
      (item) =>
        item.id.toLowerCase() === student.id.toLowerCase()
    );

    if (duplicate) {

      toast.error("Student ID already exists!");

      return;

    }

    addStudent(student);

    toast.success("Student Added Successfully!");

    setStudent({
      id: "",
      name: "",
      department: "",
      division: "",
      status: "Absent",
    });

    setTimeout(() => {

      navigate("/records");

    }, 1800);

  };

  return (

    <motion.div
      className="student-form glass"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="form-title">

        <h2>Student Registration</h2>

        <p>
          Fill all required details
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="input-box">

          <FaIdCard />

          <input
            type="text"
            name="id"
            placeholder="Student ID"
            value={student.id}
            onChange={handleChange}
            required
          />

        </div>

        <div className="input-box">

          <FaUser />

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            required
          />

        </div>

        <div className="input-box">

          <FaBuilding />

          <select
            name="department"
            value={student.department}
            onChange={handleChange}
            required
          >

            <option value="">Department</option>
            <option>CSE</option>
            <option>AI & DS</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MECH</option>

          </select>

        </div>

        <div className="input-box">

          <FaLayerGroup />

          <select
            name="division"
            value={student.division}
            onChange={handleChange}
            required
          >

            <option value="">Division</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>

          </select>

        </div>

        <div className="status-section">

          <label>Status</label>

          <div
            className={
              student.status === "Present"
                ? "status-display present-display"
                : "status-display absent-display"
            }
            onClick={() =>
              setShowStatus(!showStatus)
            }
          >

            {student.status}

          </div>

          {showStatus && (

            <motion.div
              className="status-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >

              <button
                type="button"
                className="present-btn"
                onClick={() =>
                  setStatus("Present")
                }
              >
                Present
              </button>

              <button
                type="button"
                className="absent-btn"
                onClick={() =>
                  setStatus("Absent")
                }
              >
                Absent
              </button>

            </motion.div>

          )}

        </div>

        <button
          type="submit"
          className="submit-btn"
        >

          <FaPaperPlane />

          Submit

        </button>

      </form>

    </motion.div>

  );

}

export default StudentForm;