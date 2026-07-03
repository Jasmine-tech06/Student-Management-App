import ExportPDF from "../components/ExportPDF";
import ExportExcel from "../components/ExportExcel";
import AttendanceChart from "../components/AttendanceChart";
import EditStudentModal from "../components/EditStudentModal";
import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";
import { useStudent } from "../context/StudentContext";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaChartLine,
} from "react-icons/fa";
import "../styles/Table.css";

function Records() {
  const {
    totalStudents,
    presentStudents,
    absentStudents,
  } = useStudent();

  return (
    <>
      <Navbar />

      <section className="records-page">

        <div className="container">

          <motion.div
            className="records-header"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <h1>Student Records Dashboard</h1>

            <p>
              View all submitted students, attendance status and
              manage records from one place.
            </p>
          </motion.div>

          <div className="dashboard-grid">

            <motion.div
              className="dashboard-card total"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <FaUsers />
              </div>

              <div>
                <h2>{totalStudents}</h2>
                <p>Total Students</p>
              </div>
            </motion.div>

            <motion.div
              className="dashboard-card present"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <FaUserCheck />
              </div>

              <div>
                <h2>{presentStudents}</h2>
                <p>Present Students</p>
              </div>
            </motion.div>

            <motion.div
              className="dashboard-card absent"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <FaUserTimes />
              </div>

              <div>
                <h2>{absentStudents}</h2>
                <p>Absent Students</p>
              </div>
            </motion.div>

            <motion.div
              className="dashboard-card attendance"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">
                <FaChartLine />
              </div>

              <div>
                <h2>
                  {totalStudents === 0
                    ? "0%"
                    : `${Math.round(
                        (presentStudents / totalStudents) * 100
                      )}%`}
                </h2>

                <p>Attendance</p>
              </div>
            </motion.div>

          </div>
          <AttendanceChart />
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
  <ExportExcel />
  <ExportPDF />
</div>
          
          <motion.div
            className="table-section"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <StudentTable />
            <EditStudentModal />
          </motion.div>

        </div>

      </section>
    </>
  );
}

export default Records;