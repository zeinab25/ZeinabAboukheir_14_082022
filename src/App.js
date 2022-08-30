import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Employees from "./pages/Employees";
import Error from "./pages/Error";
import MOCK_DATA from "./MOCK_DATA.json";


function getEmployees() {
  const employees = JSON.parse(localStorage.getItem("employees")) || []; //replace the empty array with MOCK_DATA to use them
  return employees;
}

function App() {
  const [employees, setEmployees] = useState(getEmployees);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Form setEmployees={setEmployees} />}
          />
          <Route path="/employees" element={<Employees employees = {employees} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
