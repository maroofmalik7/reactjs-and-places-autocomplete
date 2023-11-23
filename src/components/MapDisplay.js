import React from 'react';
import { useSelector } from 'react-redux';

const MapDisplay = () => {
  const places = useSelector((state) => state.places); // Retrieve places from Redux store

  // Display places on the map using a map library (e.g., Google Maps)
  // Implement map display logic here

  return (
    <div>
      {/* Map Display */}
      {/* Use the fetched places to display on the map */}
    </div>
  );
};

export default MapDisplay;
