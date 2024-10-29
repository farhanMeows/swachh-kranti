import React, { useState } from "react";

function OrderPickup() {
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduledPickup, setScheduledPickup] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });

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

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center max-w-lg mx-auto">
      <h2 className="text-2xl text-indigo-400 mb-4">Schedule a Pickup</h2>

      {message.text && (
        <p
          className={`mb-4 text-lg ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}

      {/* Input and Schedule Button */}
      {!scheduledPickup ? (
        <div className="flex flex-col items-center">
          <input
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-700 text-gray-100 border border-indigo-400 mb-4"
          />
          <button
            onClick={handleSchedule}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transition-all duration-300 disabled:opacity-50"
            disabled={!scheduleDate}
          >
            Schedule Pickup
          </button>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-lg text-indigo-300 mb-2">
            Scheduled Date:{" "}
            <span className="text-indigo-400 font-semibold">
              {scheduledPickup}
            </span>
          </p>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500 transition-all duration-300"
          >
            Cancel Pickup
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderPickup;
