import React, { useState } from "react";
import { MapPin, Users, Activity } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Card component
const Card = ({ children, className }) => (
  <div className={`border rounded-lg bg-white shadow p-4 ${className}`}>{children}</div>
);

// Badge component
const Badge = ({ children, variant }) => {
  const base = "px-2 py-1 rounded-full text-xs font-medium";
  const colors = {
    active: "bg-green-100 text-green-800",
    completed: "bg-gray-200 text-gray-800",
  };
  return <span className={`${base} ${colors[variant] || colors.active}`}>{children}</span>;
};

// Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Sample mental health & depression programs
const mentalHealthPrograms = [
  { id: "1", name: "Depression Awareness Workshop", region: "north", sessions: 3, participants: 120, status: "active" },
  { id: "2", name: "Mindfulness & Meditation Group", region: "south", sessions: 4, participants: 80, status: "active" },
  { id: "3", name: "Cognitive Behavioral Therapy Sessions", region: "east", sessions: 6, participants: 45, status: "completed" },
  { id: "4", name: "Stress Management & Coping Skills", region: "west", sessions: 2, participants: 60, status: "active" },
];

const COLORS = ["#4ade80", "#9ca3af"]; // green for active, gray for completed

const HealthReport = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms =
    selectedRegion === "all"
      ? mentalHealthPrograms
      : mentalHealthPrograms.filter((prog) => prog.region === selectedRegion);

  // Prepare data for charts
  const regionSessions = ["north", "south", "east", "west"].map((region) => ({
    region,
    sessions: filteredPrograms.filter((p) => p.region === region).reduce((sum, p) => sum + p.sessions, 0),
  }));

  const statusData = [
    { name: "Active", value: filteredPrograms.filter((p) => p.status === "active").length },
    { name: "Completed", value: filteredPrograms.filter((p) => p.status === "completed").length },
  ];

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">Mental Health Programs Dashboard</h1>

      {/* Region Filter */}
      <div className="flex gap-2 flex-wrap mb-4">
        {["all", "north", "south", "east", "west"].map((region) => (
          <Button
            key={region}
            className={`text-sm ${selectedRegion === region ? "bg-blue-700" : ""}`}
            onClick={() => setSelectedRegion(region)}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </Button>
        ))}
      </div>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search programs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/2 mb-4 p-2 border rounded"
      />

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Sessions per Region Bar Chart */}
        <Card>
          <h2 className="text-lg font-semibold mb-2">Total Sessions by Region</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={regionSessions}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sessions" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Status Pie Chart */}
        <Card>
          <h2 className="text-lg font-semibold mb-2">Program Status Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">{filteredPrograms.length}</p>
            <span className="text-sm text-gray-600">Active Programs</span>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">
              {filteredPrograms.reduce((sum, p) => sum + p.sessions, 0)}
            </p>
            <span className="text-sm text-gray-600">Total Sessions</span>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">
              {filteredPrograms.reduce((sum, p) => sum + p.participants, 0)}
            </p>
            <span className="text-sm text-gray-600">People Reached</span>
          </div>
        </Card>
      </div>

      {/* Program List */}
      <div>
        {filteredPrograms
          .filter((prog) => prog.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((prog) => (
            <Card key={prog.id} className="mb-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-800">{prog.name}</span>
                <Badge variant={prog.status}>{prog.status}</Badge>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default HealthReport;
