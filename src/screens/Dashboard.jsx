import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Dashboard() {
  const [activeSection, setActiveSection] = useState("Customer");
  const [revenueFilter, setRevenueFilter] = useState("Monthly Revenue");
  const [regionFilter, setRegionFilter] = useState("State-wise");

  const getBarData = () => {
    switch (revenueFilter) {
      case "Yearly Revenue":
        return {
          labels: ["2020", "2021", "2022", "2023"],
          datasets: [
            {
              label: "Revenue (in Crores)",
              data: [200, 250, 300, 350],
              backgroundColor: "#f59e0b",
            },
          ],
        };
      case "Quarterly Revenue":
        return {
          labels: ["Q1", "Q2", "Q3", "Q4"],
          datasets: [
            {
              label: "Revenue (in Crores)",
              data: [50, 75, 90, 100],
              backgroundColor: "#f59e0b",
            },
          ],
        };
      default:
        return {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Revenue (in Crores)",
              data: [10, 12, 14, 18, 20],
              backgroundColor: "#f59e0b",
            },
          ],
        };
    }
  };

  const getPieData = () => {
    switch (regionFilter) {
      case "City-wise":
        return {
          labels: ["City X", "City Y", "City Z"],
          datasets: [
            {
              data: [20000, 15000, 10000],
              backgroundColor: ["#6366f1", "#4ade80", "#f43f5e"],
              hoverBackgroundColor: ["#4338ca", "#22c55e", "#e11d48"],
            },
          ],
        };
      default:
        return {
          labels: ["Region A", "Region B", "Region C"],
          datasets: [
            {
              data: [30000, 20000, 15000],
              backgroundColor: ["#6366f1", "#4ade80", "#f43f5e"],
              hoverBackgroundColor: ["#4338ca", "#22c55e", "#e11d48"],
            },
          ],
        };
    }
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
        <ul className="space-y-4">
          {["Customer", "Driver", "Manager", "Operations", "Revenue"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === section
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
        {activeSection === "Customer" && (
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Total Customers", value: "500", color: "indigo" },
              { title: "Scheduled Pickups", value: "150", color: "green" },
              { title: "Completed Pickups", value: "120", color: "blue" },
              { title: "Failed Pickups", value: "30", color: "red" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold">{stat.title}</h3>
                <p className={`text-${stat.color}-400 text-3xl font-bold`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeSection === "Driver" && (
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "Total Drivers", value: "50", color: "indigo" },
              { title: "On-Duty Drivers", value: "35", color: "green" },
              { title: "Off-Duty Drivers", value: "15", color: "yellow" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold">{stat.title}</h3>
                <p className={`text-${stat.color}-400 text-3xl font-bold`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeSection === "Manager" && (
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Total Managers", value: "10", color: "indigo" },
              { title: "Active Managers", value: "7", color: "green" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold">{stat.title}</h3>
                <p className={`text-${stat.color}-400 text-3xl font-bold`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeSection === "Operations" && (
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "Total Waste Collected (kg)",
                value: "25,000",
                color: "indigo",
              },
              { title: "Recycled Waste (kg)", value: "18,000", color: "green" },
              { title: "Pending Collections", value: "7,000", color: "red" },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold">{stat.title}</h3>
                <p className={`text-${stat.color}-400 text-3xl font-bold`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}
        {/* Revenue Section */}
        {activeSection === "Revenue" && (
          <div>
            {/* Revenue Filters */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
                <select
                  value={revenueFilter}
                  onChange={(e) => setRevenueFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
                >
                  <option>Monthly Revenue</option>
                  <option>Quarterly Revenue</option>
                  <option>Yearly Revenue</option>
                </select>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Revenue by Region</h3>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
                >
                  <option>State-wise</option>
                  <option>City-wise</option>
                </select>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Bar data={getBarData()} options={barOptions} />
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Pie data={getPieData()} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
