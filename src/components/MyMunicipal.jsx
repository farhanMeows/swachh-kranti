import React from "react";

function MyMunicipal() {
  const weeklySchedule = [
    { day: "Monday", time: "8:00 AM" },
    { day: "Wednesday", time: "8:00 AM" },
    { day: "Friday", time: "8:00 AM" },
  ];

  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Weekly Pickup Schedule
      </h2>
      <ul className="space-y-4">
        {weeklySchedule.map((schedule, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-700 p-4 rounded-md shadow-md hover:bg-gray-600 transition-colors"
          >
            <span className="font-medium text-lg text-gray-100">
              {schedule.day}
            </span>
            <span className="text-indigo-300 font-semibold">
              {schedule.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyMunicipal;
