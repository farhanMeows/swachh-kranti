import React from "react";

function MyProfile() {
  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">My Profile</h2>
      <ul className="space-y-4">
        <li className="flex justify-between items-center bg-gray-700 p-4 rounded-md shadow-md hover:bg-gray-600 transition-colors">
          <span className="font-medium text-gray-100">Reports</span>
          <span className="text-gray-400 text-sm">(Coming Soon)</span>
        </li>
        <li className="flex justify-between items-center bg-gray-700 p-4 rounded-md shadow-md hover:bg-gray-600 transition-colors">
          <span className="font-medium text-gray-100">Help</span>
          <span className="text-gray-400 text-sm">(Coming Soon)</span>
        </li>
        <li className="flex justify-between items-center bg-gray-700 p-4 rounded-md shadow-md hover:bg-gray-600 transition-colors">
          <span className="font-medium text-gray-100">Analytics</span>
          <span className="text-gray-400 text-sm">(Coming Soon)</span>
        </li>
      </ul>
    </div>
  );
}

export default MyProfile;
