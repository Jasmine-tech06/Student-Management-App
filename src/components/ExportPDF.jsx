import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useStudent } from "../context/StudentContext";
import { FaFilePdf } from "react-icons/fa";

function ExportPDF() {

  const { students } = useStudent();

  const exportPDF = () => {

    if (students.length === 0) {
      alert("No student records found!");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Student Attendance Report", 14, 15);

    const tableColumn = [
      "ID",
      "Name",
      "Department",
      "Division",
      "Status",
    ];

    const tableRows = students.map((s) => [
      s.id,
      s.name,
      s.department,
      s.division,
      s.status,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });

    doc.save("Student_Records.pdf");
  };

  return (
    <button className="pdf-btn" onClick={exportPDF}>
      <FaFilePdf />
      Export PDF
    </button>
  );
}

export default ExportPDF;