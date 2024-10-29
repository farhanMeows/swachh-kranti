import React from "react";

function MyProfile() {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
        My Profile
      </h2>
      <ul className="space-y-4">
        <li className="text-gray-100 bg-gradient-to-r from-gray-700 to-gray-800 rounded-md p-4 shadow-md transition-transform transform hover:scale-105">
          <span className="font-medium">Reports</span>{" "}
          <span className="text-sm text-gray-400">(Coming Soon)</span>
        </li>
        <li className="text-gray-100 bg-gradient-to-r from-gray-700 to-gray-800 rounded-md p-4 shadow-md transition-transform transform hover:scale-105">
          <span className="font-medium">Help</span>{" "}
          <span className="text-sm text-gray-400">(Coming Soon)</span>
        </li>
        <li className="text-gray-100 bg-gradient-to-r from-gray-700 to-gray-800 rounded-md p-4 shadow-md transition-transform transform hover:scale-105">
          <span className="font-medium">Analytics</span>{" "}
          <span className="text-sm text-gray-400">(Coming Soon)</span>
        </li>
      </ul>
    </div>
  );
}

export default MyProfile;
