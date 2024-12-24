import React, { useState } from "react";

function OrderPickup() {
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduledPickup, setScheduledPickup] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleSchedule = () => {
    if (scheduleDate) {
      setScheduledPickup(scheduleDate);
      setScheduleDate("");
      setMessage({ type: "success", text: "Pickup successfully scheduled!" });
    }
  };

  const handleCancel = () => {
    setScheduledPickup(null);
    setMessage({ type: "error", text: "Scheduled pickup canceled." });
  };

  const handleDateClick = () => {
    setIsDatePickerVisible(true);
  };

  const handleDateChange = (e) => {
    setScheduleDate(e.target.value);
    setIsDatePickerVisible(false);
  };

  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Schedule a Pickup
      </h2>

      {message.text && (
        <p
          className={`mb-4 text-lg font-medium ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}

      {!scheduledPickup ? (
        <div className="space-y-4">
          {/* Clickable Date Bar */}
          <div
            onClick={handleDateClick}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-indigo-500 cursor-pointer"
          >
            {scheduleDate || "Select a date"}
          </div>

          {/* Hidden Date Input */}
          {isDatePickerVisible && (
            <input
              type="date"
              value={scheduleDate}
              onChange={handleDateChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-indigo-500 mt-2"
            />
          )}

          <button
            onClick={handleSchedule}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transition duration-300 disabled:opacity-50"
            disabled={!scheduleDate}
          >
            Schedule Pickup
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-indigo-300 mb-4">
            Scheduled Date: <span className="font-bold">{scheduledPickup}</span>
          </p>
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500 transition duration-300"
          >
            Cancel Pickup
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderPickup;
