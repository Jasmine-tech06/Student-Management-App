import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStudent } from "../context/StudentContext";
import { toast } from "react-toastify";
import "../styles/EditModal.css";

function EditStudentModal() {

  const {
    editingStudent,
    setEditingStudent,
    updateStudent,
  } = useStudent();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
    division: "",
    status: "Absent",
  });

  useEffect(() => {

    if (editingStudent) {

      setStudent(editingStudent);

    }

  }, [editingStudent]);

  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = () => {

    updateStudent(student);

    toast.success("Student Updated Successfully");

  };

  return (

    <AnimatePresence>

      {editingStudent && (

        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            className="edit-modal"
            initial={{
              scale: .8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: .8,
              opacity: 0,
            }}
            transition={{
              duration: .3,
            }}
          >

            <h2>Edit Student</h2>

            <div className="modal-form">

              <input
                type="text"
                name="id"
                value={student.id}
                onChange={handleChange}
              />

              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
              />

              <select
                name="department"
                value={student.department}
                onChange={handleChange}
              >

                <option>CSE</option>
                <option>AI & DS</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>MECH</option>

              </select>

              <select
                name="division"
                value={student.division}
                onChange={handleChange}
              >

                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>

              </select>

              <select
                name="status"
                value={student.status}
                onChange={handleChange}
              >

                <option>Present</option>
                <option>Absent</option>

              </select>

            </div>

            <div className="modal-buttons">

              <button
                className="cancel-btn"
                onClick={() =>
                  setEditingStudent(null)
                }
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

export default EditStudentModal;