import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet styles are loaded

// Fix marker icon issue for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function CommunityMap() {
  const [reports, setReports] = useState([
    {
      position: { lat: 22.5726, lng: 88.3639 },
      title: "Free Health Camp",
      description: "Free health checkup in Salt Lake area.",
    },
    {
      position: { lat: 22.585, lng: 88.41 },
      title: "Dengue Alert",
      description: "Increase in dengue cases in this locality.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleAddReport = () => {
    const newReport = {
      position: { lat: 22.5726, lng: 88.3639 }, // Default to map center
      title: formData.title,
      description: formData.description,
    };
    setReports((prev) => [...prev, newReport]);
    setFormData({ title: "", description: "" });
    setShowForm(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      {/* Add Report Button */}
      <button
        onClick={() => setShowForm(true)}
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 9999,
          backgroundColor: "#2563eb", // Tailwind blue-600
          color: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        + Add Report
      </button>

      {/* Form Overlay */}
      {showForm && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "16px",
            zIndex: 9999,
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            width: "300px",
          }}
        >
          <h3 style={{ marginBottom: "12px", fontSize: "18px", fontWeight: "600" }}>
            New Report
          </h3>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{
              width: "100%",
              marginBottom: "8px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            style={{
              width: "100%",
              marginBottom: "8px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              minHeight: "60px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={handleAddReport}
              style={{
                backgroundColor: "#16a34a", // Tailwind green-600
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              style={{
                backgroundColor: "#e5e7eb", // Tailwind gray-300
                color: "#1f2937", // Tailwind gray-800
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Map */}
      <MapContainer
        center={[22.5726, 88.3639]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {reports.map((report, idx) => (
          <Marker key={idx} position={report.position}>
            <Popup>
              <h2 style={{ fontWeight: "bold", marginBottom: "4px" }}>{report.title}</h2>
              <p>{report.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
