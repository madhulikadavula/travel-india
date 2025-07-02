import { DirectionsRenderer, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function MapView() {
  const [directions, setDirections] = useState(null);
  const [searchParams] = useSearchParams();
  const origin = searchParams.get('start');
  const destination = searchParams.get('end');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace this with your key
    libraries: ['places'],
  });

  useEffect(() => {
    if (!isLoaded || !origin?.trim() || !destination?.trim()) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: 'DRIVING',
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
        } else {
          console.error('Directions error:', status);
        }
      }
    );
  }, [isLoaded, origin, destination]);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap
      center={{ lat: 20.5937, lng: 78.9629 }} // India center
      zoom={5}
      mapContainerStyle={{ height: '500px', width: '100%' }}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
}

export default MapView;
