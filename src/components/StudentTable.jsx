import { useState } from "react";
import { useStudent } from "../context/StudentContext";
import { toast } from "react-toastify";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaUserGraduate,
} from "react-icons/fa";

import DeleteModal from "./DeleteModal";

function StudentTable() {

  const {
    students,
    deleteStudent,
    setEditingStudent,
  } = useStudent();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [selectedId, setSelectedId] =
    useState(null);

  const filteredStudents = students.filter((student) => {

    const keyword = search.toLowerCase();

    const searchMatch =
      student.id.toLowerCase().includes(keyword) ||
      student.name.toLowerCase().includes(keyword) ||
      student.department.toLowerCase().includes(keyword) ||
      student.division.toLowerCase().includes(keyword);

    const departmentMatch =
      department === "All"
        ? true
        : student.department === department;

    return searchMatch && departmentMatch;

  });

  const openDeleteModal = (id) => {

    setSelectedId(id);

    setShowDeleteModal(true);

  };

  const confirmDelete = () => {

    deleteStudent(selectedId);

    toast.success("Student Deleted Successfully");

    setShowDeleteModal(false);

    setSelectedId(null);

  };

  return (

    <>

      <div className="student-table">

        <div className="table-top">

          <div>

            <h2>Student Records</h2>

            <p>

              Showing

              <strong>

                {" "}
                {filteredStudents.length}

              </strong>

              {" "}Students

            </p>

          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >

            <div className="search-box">

              <FaSearch />

              <input
                type="text"
                placeholder="Search Student..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <select
              className="filter-select"
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
            >

              <option>All</option>
              <option>CSE</option>
              <option>AI & DS</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MECH</option>

            </select>

          </div>

        </div>

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Division</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredStudents.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="no-data"
                  >

                    <FaUserGraduate />

                    <h3>No Student Found</h3>

                    <p>

                      Register students from the
                      Home page.

                    </p>

                  </td>

                </tr>

              ) : (

                filteredStudents.map((student) => (

                  <tr key={student.id}>

                    <td>{student.id}</td>

                    <td>{student.name}</td>

                    <td>{student.department}</td>

                    <td>{student.division}</td>

                    <td>

                      <span
                        className={
                          student.status === "Present"
                            ? "status present"
                            : "status absent"
                        }
                      >

                        {student.status}

                      </span>

                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          setEditingStudent(student)
                        }
                      >

                        <FaEdit />

                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          openDeleteModal(student.id)
                        }
                      >

                        <FaTrash />

                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onCancel={() => {

          setShowDeleteModal(false);

          setSelectedId(null);

        }}
        onConfirm={confirmDelete}
      />

    </>

  );

}

export default StudentTable;