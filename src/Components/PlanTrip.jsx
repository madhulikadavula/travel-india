// src/components/PlanTrip.jsx
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function PlanTrip() {
  const [start, setStart] = useState('');
  const [searchParams] = useSearchParams();
  const [end, setEnd] = useState(searchParams.get('end') || '');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/map?start=${start}&end=${end}`);
  };

  return (
    <div>
      <h2>Plan Your Trip</h2>
      <input placeholder="Start Location" value={start} onChange={e => setStart(e.target.value)} />
      <input placeholder="End Location" value={end} onChange={e => setEnd(e.target.value)} />
      <button onClick={handleSubmit}>Show Map</button>
    </div>
  );
}

export default PlanTrip;
