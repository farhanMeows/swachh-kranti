import React, { useState } from "react";

function Manager() {
  const [activeTab, setActiveTab] = useState("Driver Monitoring");
  const [showNotes, setShowNotes] = useState({ visible: false, notes: "" });

  const [drivers, setDrivers] = useState([
    { id: 1, name: "Driver A", task: "Kangla Fort, KF2", status: "PENDING" },
    { id: 2, name: "Driver A", task: "Kangla Fort, KF1", status: "COMPLETED" },
    { id: 3, name: "Driver C", task: "789 Lane, Area C", status: "FAILED" },
  ]);

  const [bins, setBins] = useState([
    { id: 1, name: "KF2", status: "PENDING" },
    { id: 2, name: "TB1", status: "COMPLETED" },
    { id: 3, name: "PB1", status: "FAILED" },
  ]);

  const updateComplaintStatus = (index, status) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint, i) =>
        i === index ? { ...complaint, status } : complaint
      )
    );
  };
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      customerId: "CUST001",
      trashBinId: "TB001",
      place: "123 Street, Area A",
      assignedDriver: "Driver A",
      notes: "Customer reported overflowing trash bin.",
      status: "PENDING",
    },
    {
      id: 2,
      customerId: "CUST002",
      trashBinId: "TB002",
      place: "456 Road, Area B",
      assignedDriver: "Driver B",
      notes: "Bin lid is broken and requires replacement.",
      status: "PENDING",
    },
    {
      id: 3,
      customerId: "CUST003",
      trashBinId: "TB003",
      place: "789 Lane, Area C",
      assignedDriver: "Driver C",
      notes: "Trash was not collected on the scheduled date.",
      status: "PENDING",
    },
  ]);

  const updateStatus = (id, status) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, status } : driver
      )
    );
  };
  const updateBinStatus = (id, status) => {
    setBins((prevBins) =>
      prevBins.map((bin) => (bin.id === id ? { ...bin, status } : bin))
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Manager Dashboard
        </h1>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab("Driver Monitoring")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "Driver Monitoring"
                  ? "bg-gray-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Driver Monitoring
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Verify Bins")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "Verify Bins"
                  ? "bg-gray-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Verify Bins
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("View Complaints")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "View Complaints"
                  ? "bg-gray-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              View Complaints
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {activeTab === "Driver Monitoring" && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Driver Monitoring
            </h2>
            <input
              type="text"
              placeholder="Search drivers by name..."
              className="w-full p-3 mb-6 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <table className="table-auto w-full bg-gray-800 rounded-lg text-left shadow-lg">
              <thead className="bg-gray-700">
                <tr className="text-gray-300">
                  <th className="px-6 py-4">Driver Name</th>
                  <th className="px-6 py-4">Current Task</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, index) => (
                  <tr
                    key={driver.id}
                    className={`border-t border-gray-600 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600 transition`}
                  >
                    <td className="px-6 py-4 text-gray-300">{driver.name}</td>
                    <td className="px-6 py-4 text-gray-400">{driver.task}</td>
                    <td
                      className={`px-6 py-4 font-bold ${
                        driver.status === "PENDING"
                          ? "text-yellow-400"
                          : driver.status === "COMPLETED"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {driver.status}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => updateStatus(driver.id, "COMPLETED")}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all mr-2"
                      >
                        Mark as Completed
                      </button>
                      <button
                        onClick={() => updateStatus(driver.id, "FAILED")}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all"
                      >
                        Mark as Failed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "Verify Bins" && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Verify Bins</h2>
            <input
              type="text"
              placeholder="Search Bin by Bin Id..."
              className="w-full p-3 mb-6 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <table className="table-auto w-full bg-gray-800 rounded-lg text-left shadow-lg">
              <thead className="bg-gray-700">
                <tr className="text-gray-300">
                  <th className="px-6 py-4">Bin Id</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bins.map((bin, index) => (
                  <tr
                    key={bin.id}
                    className={`border-t border-gray-600 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600 transition`}
                  >
                    <td className="px-6 py-4 text-gray-300">{bin.name}</td>
                    <td
                      className={`px-6 py-4 font-bold ${
                        bin.status === "PENDING"
                          ? "text-yellow-400"
                          : bin.status === "COMPLETED"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {bin.status}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => updateBinStatus(bin.id, "COMPLETED")}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all mr-2"
                      >
                        Mark as Completed
                      </button>
                      <button
                        onClick={() => updateBinStatus(bin.id, "FAILED")}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all"
                      >
                        Mark as Failed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "View Complaints" && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Customer Complaints
            </h2>
            <table className="table-auto w-full bg-gray-800 rounded-lg text-left shadow-lg">
              <thead className="bg-gray-700">
                <tr className="text-gray-300">
                  <th className="px-6 py-4">Customer ID</th>
                  <th className="px-6 py-4">Trash Bin ID</th>
                  <th className="px-6 py-4">Place</th>
                  <th className="px-6 py-4">Assigned Driver</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-600 ${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600 transition`}
                  >
                    <td className="px-6 py-4 text-gray-300">
                      {complaint.customerId}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {complaint.trashBinId}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {complaint.place}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {complaint.assignedDriver}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        complaint.status === "Resolved"
                          ? "text-green-500"
                          : complaint.status === "Unresolved"
                          ? "text-yellow-500"
                          : complaint.status === "Spam"
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {complaint.status || "Pending"}
                    </td>

                    <td className="px-6 py-4 space-y-2">
                      {/* View Notes Button */}
                      <div>
                        <button
                          onClick={() =>
                            setShowNotes({
                              visible: true,
                              notes: complaint.notes,
                            })
                          }
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
                        >
                          View Notes
                        </button>
                      </div>
                      {/* Status Buttons */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            updateComplaintStatus(index, "Resolved")
                          }
                          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all"
                        >
                          Resolved
                        </button>
                        <button
                          onClick={() =>
                            updateComplaintStatus(index, "Unresolved")
                          }
                          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-all"
                        >
                          Unresolved
                        </button>
                        <button
                          onClick={() => updateComplaintStatus(index, "Spam")}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all"
                        >
                          Spam
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showNotes.visible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
                  <h3 className="text-xl font-bold mb-4">Complaint Notes</h3>
                  <p className="text-gray-300 mb-6">{showNotes.notes}</p>
                  <button
                    onClick={() => setShowNotes({ visible: false, notes: "" })}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Manager;
