// src/components/Details.jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { location } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/trips/${location}`)
      .then(res => setTrip(res.data))
      .catch(err => console.error(err));
  }, [location]);

  if (!trip) return <p>Loading trip data...</p>;

  return (
    <div>
      <h2>Trip to {location}</h2>
      <p><strong>Food:</strong> {trip.food.join(', ')}</p>
      <p><strong>Stay:</strong> {trip.stayOptions.join(', ')}</p>
      <p><strong>Group Size:</strong> {trip.groupSize}</p>
      <p><strong>Estimated Expenses:</strong> ₹{trip.expenses}</p>
    </div>
  );
}

export default Details;
