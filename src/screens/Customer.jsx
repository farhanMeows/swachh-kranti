import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OrderPickup from "../components/OrderPickup";
import MyMunicipal from "../components/MyMunicipal";
import MyProfile from "../components/MyProfile";

function Customer() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-center gap-4 p-6 bg-indigo-900 shadow-lg">
        <Link
          to="order-pickup"
          className="hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          Order Pickup
        </Link>
        <Link
          to="my-municipal"
          className="hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          My Municipal
        </Link>
        <Link
          to="my-profile"
          className="hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          My Profile
        </Link>
      </nav>

      {/* Customer Screen Routes */}
      <div className="p-6">
        <Routes>
          <Route path="order-pickup" element={<OrderPickup />} />
          <Route path="my-municipal" element={<MyMunicipal />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Customer;
