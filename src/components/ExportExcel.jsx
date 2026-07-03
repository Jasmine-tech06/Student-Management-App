import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { useStudent } from "../context/StudentContext";
import { FaFileExcel } from "react-icons/fa";

function ExportExcel() {

  const { students } = useStudent();

  const exportFile = () => {

    if (students.length === 0) {
      alert("No student records found!");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(students);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Students"
    );

    const excelBuffer = XLSX.write(
      workbook,
      {
        bookType: "xlsx",
        type: "array",
      }
    );

    const file = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(file, "Student_Records.xlsx");

  };

  return (

    <button
      className="excel-btn"
      onClick={exportFile}
    >

      <FaFileExcel />

      Export Excel

    </button>

  );

}

export default ExportExcel;