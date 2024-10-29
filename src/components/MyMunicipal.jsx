import React from "react";

function MyMunicipal() {
  const weeklySchedule = [
    { day: "Monday", time: "8:00 AM" },
    { day: "Wednesday", time: "8:00 AM" },
    { day: "Friday", time: "8:00 AM" },
  ];

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
        Weekly Pickup Schedule
      </h2>
      <ul className="space-y-4">
        {weeklySchedule.map((schedule, index) => (
          <li
            key={index}
            className="text-gray-100 bg-gradient-to-r from-gray-700 to-gray-800 rounded-md p-4 shadow-md transform transition-transform hover:scale-105"
          >
            <span className="text-lg font-medium">{schedule.day}</span>:{" "}
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
