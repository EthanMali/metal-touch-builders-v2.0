import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationsMap: React.FC = () => {
  useEffect(() => {
    const map = L.map('map', {
      zoomControl: false, // Hide default zoom buttons
      scrollWheelZoom: false, // Disable scroll zoom for better UX
    }).setView([37.071482, -93.255503], 5);
    // Use a visually appealing tile layer (CartoDB Positron)
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      }
    ).addTo(map);

    L.circle([37.208957, -93.292299], {
      radius: 700000, // Radius in meters (adjust as needed)
      color: "#facc15",
      fillColor: "#fbde6c",
      fillOpacity: 0.3
  }).addTo(map);
  

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '80%',
        height: '500px',
        borderRadius: '12px',
        boxShadow: '0px 1px 10px #909192',
        overflow: 'hidden',
        zIndex: 1,
      }}
    ></div>
  );
};

export default LocationsMap;
