// src/components/Home.jsx
import { useNavigate } from 'react-router-dom';

const destinations = [
  { name: 'Kerala', image: '/assets/kerala.jpg' },
  { name: 'Goa', image: '/assets/goa.jpg' },
  { name: 'Ladakh', image: '/assets/ladakh.jpg' }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Explore India</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {destinations.map(dest => (
          <div key={dest.name}>
            <img src={dest.image} alt={dest.name} width="200" height="150" />
            <h3>{dest.name}</h3>
            <button onClick={() => navigate(`/plan?end=${dest.name}`)}>Plan Trip</button>
            <button onClick={() => navigate(`/details/${dest.name}`)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
