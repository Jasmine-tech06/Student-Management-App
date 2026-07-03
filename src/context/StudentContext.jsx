import { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {

  const [students, setStudents] = useState(() => {

    const saved = localStorage.getItem("students");

    return saved ? JSON.parse(saved) : [];

  });

  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  const addStudent = (student) => {

    setStudents((prev) => [...prev, student]);

  };

  const deleteStudent = (id) => {

    setStudents((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };

  const updateStudent = (updatedStudent) => {

    setStudents((prev) =>
      prev.map((item) =>
        item.id === updatedStudent.id
          ? updatedStudent
          : item
      )
    );

    setEditingStudent(null);

  };

  return (

    <StudentContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        updateStudent,

        editingStudent,
        setEditingStudent,

        totalStudents: students.length,

        presentStudents:
          students.filter(
            (s) => s.status === "Present"
          ).length,

        absentStudents:
          students.filter(
            (s) => s.status === "Absent"
          ).length,
      }}
    >

      {children}

    </StudentContext.Provider>

  );

};