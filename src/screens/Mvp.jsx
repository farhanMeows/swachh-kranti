import React from "react";
import { useNavigate } from "react-router-dom";

function Mvp() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Welcome to the MVP</h1>
      <div className="space-x-4 gap-2">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/customer")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Customer
        </button>
        <button
          onClick={() => navigate("/driver")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Driver
        </button>
        <button
          onClick={() => navigate("/manager")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Manager
        </button>
      </div>
    </div>
  );
}

export default Mvp;
