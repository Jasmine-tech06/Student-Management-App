import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useStudent } from "../context/StudentContext";

function AttendanceChart() {

  const {
    presentStudents,
    absentStudents,
  } = useStudent();

  const data = [
    {
      name: "Present",
      value: presentStudents,
    },
    {
      name: "Absent",
      value: absentStudents,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (

    <div className="chart-card">

      <h2>

        Attendance Overview

      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default AttendanceChart;