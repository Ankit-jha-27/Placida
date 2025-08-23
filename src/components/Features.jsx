import React, { useState, useEffect } from "react";
import {
  FaHospital,
  FaMapMarkedAlt,
  FaVideo,
  FaHeartbeat,
  FaClipboardList,
  FaCommentDots,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to fly to current location
function FlyToLocation({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 14);
    }
  }, [position, map]);
  return null;
}

export default function Features() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const [markers, setMarkers] = useState([
    {
      position: [22.5726, 88.3639],
      name: "MindCare Kolkata",
      description: "Therapy sessions for depression & anxiety.",
    },
    {
      position: [22.579, 88.4002],
      name: "Hope Mental Wellness",
      description: "Free mental health check-ups.",
    },
    {
      position: [22.5658, 88.3704],
      name: "Kolkata Helpline Center",
      description: "24/7 support for depression.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });

  const features = [
    {
      title: "Collaborative Health Resource Hub",
      icon: <FaHospital />,
      description: "A shared hub for community health resources.",
      link: "/features/collaborative-health-resource-hub",
    },
    {
      title: "Community Health Reporting & Mapping",
      icon: <FaMapMarkedAlt />,
      description: "Report and view health data on an interactive map.",
      link: "#",
      onClick: () => {
        setIsMapOpen(true);
        getUserLocation();
      },
    },
    {
      title: "Telemedicine & Virtual Consultation",
      icon: <FaVideo />,
      description: "Access healthcare professionals remotely.",
      link: "/telemedicine-virtual",
    },
    {
      title: "Preventive Healthcare & Wellness Education",
      icon: <FaHeartbeat />,
      description: "Learn about wellness and preventive care.",
      link: "/features/wellness",
    },
    {
      title: "Health Campaign & Program Tracker",
      icon: <FaClipboardList />,
      description: "Track health initiatives in your area.",
      link: "/health-report",
    },
    {
      title: "Wellcida ChatBot",
      icon: <FaCommentDots />,
      description: "Your AI health & wellness assistant.",
      link: "#",
      onClick: () => setIsChatOpen(true),
    },
  ];

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Geolocation error:", err);
          alert("Unable to get your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      alert("Please fill all fields.");
      return;
    }
    if (!userLocation) {
      alert("Your location is required to add marker.");
      return;
    }

    setMarkers((prev) => [
      ...prev,
      { position: userLocation, name: formData.name, description: formData.description },
    ]);
    setFormData({ name: "", description: "" });
    setShowForm(false);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-wide leading-tight text-gray-800">
        Discover What <span className="text-emerald-600">Placida</span> Offers You
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            onClick={feature.onClick ? feature.onClick : undefined}
            className={feature.onClick ? "cursor-pointer" : ""}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          </div>
        ))}
      </div>

      {/* ChatBot Popup */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-[600px] h-[600px] shadow-lg relative overflow-hidden">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setIsChatOpen(false)}
            >
              ✖
            </button>
            <iframe
              src="http://localhost:3000"
              className="w-full h-full border-none rounded-xl"
              title="Wellcida ChatBot"
            />
          </div>
        </div>
      )}

      {/* Map Popup */}
      {isMapOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-[750px] h-[650px] shadow-lg relative overflow-hidden">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setIsMapOpen(false)}
            >
              ✖
            </button>
            <MapContainer
              center={[22.5726, 88.3639]}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {markers.map((marker, idx) => (
                <Marker key={idx} position={marker.position}>
                  <Popup>
                    <strong>{marker.name}</strong>
                    <br />
                    {marker.description}
                  </Popup>
                </Marker>
              ))}
              {userLocation && (
                <>
                  <Marker position={userLocation}>
                    <Popup>
                      <strong>Your Location</strong>
                    </Popup>
                  </Marker>
                  <FlyToLocation position={userLocation} />
                </>
              )}
            </MapContainer>

            {/* Button to open form */}
            <div className="absolute bottom-4 left-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg position-fixed shadow hover:bg-emerald-700"
              >
                Add New Mental Health Marker
              </button>
            </div>

            {/* Form Popup */}
            {showForm && (
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-[400px]">
                  <h3 className="text-xl font-bold mb-4">Add Marker</h3>
                  <form onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border p-2 rounded mb-3"
                    />
                    <textarea
                      placeholder="Description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full border p-2 rounded mb-3"
                    ></textarea>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
