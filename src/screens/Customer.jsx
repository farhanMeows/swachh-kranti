import React, { useState } from "react";
import { FaTrashAlt, FaCity, FaUserAlt, FaShoppingCart } from "react-icons/fa";

function Customer() {
  const [activeSection, setActiveSection] = useState("order-pickup");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduledPickup, setScheduledPickup] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [timeSlot, setTimeSlot] = useState(""); // Temporary state for time slot
  const [wasteType, setWasteType] = useState(""); // Temporary state for waste type
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const schedules = [
    {
      location: "Ima Keithel No.2",
      weeklySchedule: [
        { day: "Monday", time: "6:00 AM - 9:00 AM", status: "Scheduled" },
        { day: "Tuesday", time: "10:00 AM - 1:00 PM", status: "Scheduled" },
        { day: "Wednesday", time: "2:00 PM - 5:00 PM", status: "Pending" },
        { day: "Thursday", time: "6:00 AM - 9:00 AM", status: "Scheduled" },
        { day: "Friday", time: "10:00 AM - 1:00 PM", status: "Cancelled" },
        { day: "Saturday", time: "2:00 PM - 5:00 PM", status: "Scheduled" },
        { day: "Sunday", time: "6:00 AM - 9:00 AM", status: "Scheduled" },
      ],
    },
    {
      location: "Khwairamband Bazaar",
      weeklySchedule: [
        { day: "Monday", time: "7:00 AM - 10:00 AM", status: "Scheduled" },
        { day: "Tuesday", time: "11:00 AM - 2:00 PM", status: "Pending" },
        { day: "Wednesday", time: "3:00 PM - 6:00 PM", status: "Scheduled" },
        { day: "Thursday", time: "7:00 AM - 10:00 AM", status: "Scheduled" },
        { day: "Friday", time: "11:00 AM - 2:00 PM", status: "Scheduled" },
        { day: "Saturday", time: "3:00 PM - 6:00 PM", status: "Cancelled" },
        { day: "Sunday", time: "7:00 AM - 10:00 AM", status: "Scheduled" },
      ],
    },
    {
      location: "Nagampal Market",
      weeklySchedule: [
        { day: "Monday", time: "8:00 AM - 11:00 AM", status: "Scheduled" },
        { day: "Tuesday", time: "12:00 PM - 3:00 PM", status: "Scheduled" },
        { day: "Wednesday", time: "4:00 PM - 7:00 PM", status: "Pending" },
        { day: "Thursday", time: "8:00 AM - 11:00 AM", status: "Scheduled" },
        { day: "Friday", time: "12:00 PM - 3:00 PM", status: "Cancelled" },
        { day: "Saturday", time: "4:00 PM - 7:00 PM", status: "Scheduled" },
        { day: "Sunday", time: "8:00 AM - 11:00 AM", status: "Scheduled" },
      ],
    },
  ];

  function getStatusBadge(status) {
    switch (status) {
      case "Scheduled":
        return "bg-green-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  }

  const handleSchedule = (paymentType) => {
    setScheduledPickup({
      date: scheduleDate,
      timeSlot,
      wasteType,
      paymentType,
    });
  };

  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);

  const handleLocationChange = (e) => {
    setSelectedLocationIndex(e.target.value);
  };

  const handleCancel = () => {
    setScheduledPickup(null);
    setMessage({ type: "error", text: "Scheduled pickup canceled." });
  };

  const handleDateClick = () => {
    // Trigger date picker
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "order-pickup":
        return (
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6">
              Schedule a Pickup
            </h2>

            {!scheduledPickup ? (
              <div className="space-y-4">
                {/* Date Input */}
                <input
                  type="date"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-indigo-500"
                />

                {/* Time Slot Selection */}
                <select
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-indigo-500"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option value="" disabled>
                    Select a time slot
                  </option>
                  <option value="6:00 AM - 9:00 AM">6:00 AM - 9:00 AM</option>
                  <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
                  <option value="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</option>
                </select>

                {/* Waste Type Selection */}
                <select
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-indigo-500"
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                >
                  <option value="" disabled>
                    Select waste type
                  </option>
                  <option value="Organic Waste">Organic Waste</option>
                  <option value="Recyclable Waste">Recyclable Waste</option>
                  <option value="Hazardous Waste">Hazardous Waste</option>
                  <option value="General Waste">General Waste</option>
                </select>

                {/* Pay Now and Pay Later Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transition duration-300 disabled:opacity-50"
                    disabled={!scheduleDate || !timeSlot || !wasteType}
                  >
                    Pay Now
                  </button>
                  <button
                    onClick={() => handleSchedule("Pay Later")}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-500 transition duration-300 disabled:opacity-50"
                    disabled={!scheduleDate || !timeSlot || !wasteType}
                  >
                    Pay Later
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg text-indigo-300 mb-4">
                  Scheduled Date:{" "}
                  <span className="font-bold">{scheduledPickup.date}</span>
                </p>
                <p className="text-lg text-indigo-300 mb-4">
                  Time Slot:{" "}
                  <span className="font-bold">{scheduledPickup.timeSlot}</span>
                </p>
                <p className="text-lg text-indigo-300 mb-4">
                  Waste Type:{" "}
                  <span className="font-bold">{scheduledPickup.wasteType}</span>
                </p>
                <p className="text-lg text-indigo-300 mb-4">
                  Payment Type:{" "}
                  <span className="font-bold">
                    {scheduledPickup.paymentType}
                  </span>
                </p>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500 transition duration-300"
                >
                  Cancel Pickup
                </button>
              </div>
            )}

            {/* Dummy Payment Modal */}
            {showPaymentModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
                  <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                    Payment
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Fill in your payment details (optional):
                  </p>
                  <input
                    type="text"
                    placeholder="Credit Card Number"
                    className="w-full px-4 py-2 mb-4 rounded-md bg-gray-700 text-gray-100 border border-indigo-500"
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => {
                        setShowPaymentModal(false);
                        handleSchedule("Pay Now");
                      }}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transition duration-300"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setShowPaymentModal(false)}
                      className="px-6 py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-500 transition duration-300"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case "my-municipal":
        return (
          <div className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
              Weekly Pickup Schedules - Imphal Municipal Corporation
            </h2>

            {/* Dropdown to select location */}
            <div className="mb-6 text-center">
              <select
                value={selectedLocationIndex}
                onChange={handleLocationChange}
                className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 border border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400"
              >
                {schedules.map((locationSchedule, index) => (
                  <option key={index} value={index}>
                    {locationSchedule.location}
                  </option>
                ))}
              </select>
            </div>

            {/* Display schedule for the selected location */}
            <div>
              <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-center">
                {schedules[selectedLocationIndex].location}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {schedules[selectedLocationIndex].weeklySchedule.map(
                  (schedule, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-100">
                          {schedule.day}
                        </h3>
                        <span
                          className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusBadge(
                            schedule.status
                          )}`}
                        >
                          {schedule.status}
                        </span>
                      </div>
                      <p className="text-gray-300">
                        Pickup Time:{" "}
                        <span className="font-semibold">{schedule.time}</span>
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        );
      case "shop":
        return (
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6">
              Marketplace for Sustainable and Eco-Friendly Products only.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Product 1",
                  price: "$10",
                  description: "A great product.",
                },
                {
                  name: "Product 2",
                  price: "$20",
                  description: "An amazing product.",
                },
                {
                  name: "Product 3",
                  price: "$30",
                  description: "A must-have product.",
                },
                {
                  name: "Product 4",
                  price: "$40",
                  description: "An excellent product.",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-bold text-indigo-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{product.description}</p>
                  <p className="text-indigo-400 font-semibold mb-4">
                    {product.price}
                  </p>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "my-profile":
        return (
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6">
              My Profile
            </h2>
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
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 p-6 flex flex-col justify-between shadow-lg">
        <nav className="space-y-6">
          <button
            onClick={() => setActiveSection("order-pickup")}
            className={`flex items-center gap-3 text-lg font-semibold text-gray-100 hover:text-indigo-400 transition-colors ${
              activeSection === "order-pickup" ? "text-indigo-400" : ""
            }`}
          >
            <FaTrashAlt /> Order Pickup
          </button>
          <button
            onClick={() => setActiveSection("my-municipal")}
            className={`flex items-center gap-3 text-lg font-semibold text-gray-100 hover:text-indigo-400 transition-colors ${
              activeSection === "my-municipal" ? "text-indigo-400" : ""
            }`}
          >
            <FaCity /> My Municipal
          </button>
          <button
            onClick={() => setActiveSection("my-profile")}
            className={`flex items-center gap-3 text-lg font-semibold text-gray-100 hover:text-indigo-400 transition-colors ${
              activeSection === "my-profile" ? "text-indigo-400" : ""
            }`}
          >
            <FaUserAlt /> My Profile
          </button>
          <button
            onClick={() => setActiveSection("shop")}
            className={`flex items-center gap-3 text-lg font-semibold text-gray-100 hover:text-indigo-400 transition-colors ${
              activeSection === "shop" ? "text-indigo-400" : ""
            }`}
          >
            <FaShoppingCart /> Shop
          </button>
        </nav>
        <footer className="text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} UnloadLabs. All rights reserved.
          </p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{renderActiveSection()}</main>
    </div>
  );
}

export default Customer;
