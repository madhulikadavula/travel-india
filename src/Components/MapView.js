// src/components/MapView.jsx
import { DirectionsRenderer, GoogleMap, LoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function MapView() {
  const [directions, setDirections] = useState(null);
  const [searchParams] = useSearchParams();
  const origin = searchParams.get('start');
  const destination = searchParams.get('end');
  const waypoints = ['Mysuru', 'Coimbatore']; // Example waypoints

  useEffect(() => {
    if (!origin || !destination) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        waypoints: waypoints.map(p => ({ location: p, stopover: true })),
        travelMode: 'DRIVING'
      },
      (result, status) => {
        if (status === 'OK') setDirections(result);
      }
    );
  }, [origin, destination]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap center={{ lat: 20.59, lng: 78.96 }} zoom={5} mapContainerStyle={{ height: '500px' }}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;
