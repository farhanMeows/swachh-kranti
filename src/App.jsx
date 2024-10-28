import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./screens/Customer";
import Driver from "./screens/Driver";
import Manager from "./screens/Manager";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
}

export default App;
