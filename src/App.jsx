import { Routes, Route, Navigate } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Records from "./pages/Records";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <StudentProvider>

      <Routes>

        <Route path="/" element={<Welcome />} />

        <Route path="/home" element={<Home />} />

        <Route
          path="/records"
          element={<Records />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

    </StudentProvider>
  );
}

export default App;