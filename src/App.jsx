import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./screens/Customer";
import Driver from "./screens/Driver";
import Manager from "./screens/Manager";
import Dashboard from "./screens/Dashboard";
import OrderPickup from "./components/OrderPickup";
import MyMunicipal from "./components/MyMunicipal";
import MyProfile from "./components/MyProfile";
import Mvp from "./screens/Mvp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mvp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/driver" element={<Driver />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
}

export default App;
