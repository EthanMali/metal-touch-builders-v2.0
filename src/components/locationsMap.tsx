import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationsMap: React.FC = () => {
  useEffect(() => {
    const map = L.map('map', {
      zoomControl: false, // Hide default zoom buttons
      scrollWheelZoom: false, // Disable scroll zoom for better UX
    }).setView([37.071482, -93.255503], 9);
    // Use a visually appealing tile layer (CartoDB Positron)
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      }
    ).addTo(map);

    // Define a stylish service area polygon
    L.polygon(
      [
        [37.287069, -93.071013],
        [37.339496, -93.282499],
        [37.265214, -93.463774],
        [37.039735, -93.535185],
        [36.580149, -93.296232],
        [36.58456, -93.216582],
        [37.094525, -92.988615],
      ],
      {
        color: '#e1b218',
        fillColor: '#e1b218',
        fillOpacity: 0.3,
        weight: 2,
      }
    ).addTo(map);

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
