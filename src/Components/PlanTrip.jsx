import { useState } from 'react';
import './plan.css'; // <-- CSS import

function PlanTrip() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source, destination })
      });

      if (!response.ok) throw new Error('Place not found or server error');

      const data = await response.json();
      setResult(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="plan-container">
      <h2>Plan Your Trip</h2>

      <input
        className="plan-input"
        placeholder="Start Location"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        className="plan-input"
        placeholder="End Location"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br />
      <button className="plan-button" onClick={handleSubmit}>Submit</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div className="result-box">
          <h3>Trip Details</h3>
          <p><b>Places to Visit:</b> {result.places.join(', ')}</p>
          <p><b>Nearby Restaurants:</b> {result.restaurants.join(', ')}</p>
          <p><b>Travel Cost:</b> ₹{result.expense}</p>
          <p><b>Route Map:</b> <a href={result.mapUrl} target="_blank" rel="noreferrer">Open Map</a></p>
        </div>
      )}
    </div>
  );
}

export default PlanTrip;
