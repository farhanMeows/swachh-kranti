import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function DriverDashboard() {
  const [scheduledPickups, setScheduledPickups] = useState([
    {
      id: 1,
      customer: "John Doe",
      date: "2024-12-25",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2024-12-26",
      time: "2:00 PM",
      status: "Pending",
    },
  ]);

  const [publicPlacesTasks, setPublicPlacesTasks] = useState([
    {
      id: 1,
      location: "Kangla Fort",
      bins: [
        { id: "KF1", status: "Pending" },
        { id: "KF2", status: "Pending" },
      ],
    },
    {
      id: 2,
      location: "Manipur Zoological Garden",
      bins: [
        { id: "MZG1", status: "Pending" },
        { id: "MZG2", status: "Pending" },
        { id: "MZG3", status: "Pending" },
      ],
    },
    {
      id: 3,
      location: "Ima Market",
      bins: [{ id: "IM1", status: "Pending" }],
    },
  ]);

  const [commercialPlacesTasks, setCommercialPlacesTasks] = useState([
    {
      id: 1,
      location: "Paona Bazaar",
      bins: [
        { id: "PB1", status: "Pending" },
        { id: "PB2", status: "Pending" },
      ],
    },
    {
      id: 2,
      location: "Thangal Bazaar",
      bins: [{ id: "TB1", status: "Pending" }],
    },
    {
      id: 3,
      location: "Nagamapal",
      bins: [
        { id: "NP1", status: "Pending" },
        { id: "NP2", status: "Pending" },
      ],
    },
  ]);

  const [activeSection, setActiveSection] = useState("Task View");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [selectedBin, setSelectedBin] = useState(null);

  const handlePickupConfirmation = (pickup) => {
    pickup.status = "Picked Up";
    setPopupMessage(`Scan QR code to confirm pickup for ${pickup.customer}`);
    setSelectedPickup(pickup);
    setShowPopup(true);
  };
  const handleScanQRCodePickup = () => {
    if (selectedPickup) {
      selectedPickup.status = "Completed";
      setPopupMessage(
        `Pickup for ${selectedPickup.customer} successfully confirmed!`
      );
      setSelectedPickup(null);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  const handlePickupTrash = (bin) => {
    bin.status = "Picked Up";
    setPopupMessage(`Scan QR code for Bin ID: ${bin.id}`);
    setSelectedBin(bin);
    setShowPopup(true);
  };

  const handleScanQRCodeBin = () => {
    if (selectedBin) {
      selectedBin.status = "Completed";
      setPopupMessage(`Bin ID ${selectedBin.id} successfully submitted!`);
      setSelectedBin(null);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  const renderBins = (task) => (
    <div className="flex flex-wrap gap-2">
      {task.bins.map((bin) => (
        <button
          key={bin.id}
          onClick={() => handlePickupTrash(bin)}
          disabled={bin.status !== "Pending"}
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            bin.status === "Pending"
              ? "bg-indigo-600 hover:bg-indigo-500"
              : bin.status === "Picked Up"
              ? "bg-orange-500 cursor-not-allowed"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          <FaTrashAlt />
          <span>{bin.id}</span>
        </button>
      ))}
    </div>
  );

  const sidebarItems = [
    { name: "Task View", section: "Task View" },
    { name: "Public Places", section: "Public Places" },
    { name: "Commercial Places", section: "Commercial Places" },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="text-center mb-8">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
            alt="Driver Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold">Driver Name</h3>
          <p className="text-sm text-gray-400">Logged in as Driver</p>
        </div>
        <nav>
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(item.section)}
              className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-700 ${
                activeSection === item.section ? "bg-gray-700" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
          {activeSection}
        </h1>
        {activeSection === "Task View" && (
          <section>
            {scheduledPickups.length > 0 ? (
              <div className="space-y-4">
                {scheduledPickups.map((pickup) => (
                  <div
                    key={pickup.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center"
                  >
                    <div>
                      <p>
                        <span className="font-semibold">Customer:</span>{" "}
                        {pickup.customer}
                      </p>
                      <p>
                        <span className="font-semibold">Date:</span>{" "}
                        {pickup.date}
                      </p>
                      <p>
                        <span className="font-semibold">Time:</span>{" "}
                        {pickup.time}
                      </p>
                    </div>
                    <button
                      onClick={() => handlePickupConfirmation(pickup)}
                      disabled={pickup.status !== "Pending"}
                      className={`px-4 py-2 rounded-md ${
                        pickup.status === "Pending"
                          ? "bg-indigo-600 hover:bg-indigo-500"
                          : pickup.status === "Picked Up"
                          ? "bg-orange-500 cursor-not-allowed"
                          : "bg-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {pickup.status === "Pending"
                        ? "Confirm Pickup"
                        : pickup.status}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No scheduled pickups at the moment.</p>
            )}
          </section>
        )}
        {activeSection === "Public Places" && (
          <section>
            <div className="space-y-4">
              {publicPlacesTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <p className="font-semibold mb-2">{task.location}</p>
                  {renderBins(task)}
                </div>
              ))}
            </div>
          </section>
        )}
        {activeSection === "Commercial Places" && (
          <section>
            <div className="space-y-4">
              {commercialPlacesTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <p className="font-semibold mb-2">{task.location}</p>
                  {renderBins(task)}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-white mb-4">{popupMessage}</p>
            {selectedPickup && (
              <button
                onClick={handleScanQRCodePickup}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md"
              >
                Scan QR Code
              </button>
            )}
            {selectedBin && (
              <button
                onClick={handleScanQRCodeBin}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md"
              >
                Scan QR Code
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverDashboard;
