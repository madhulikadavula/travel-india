import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home1">
        <h1>Travel India</h1>
        <p><b>Discover the beauty of India<br/>Explore places, plan your route, and more!</b></p>
        <div style={{ textAlign: 'center' }}>
          <button className="button" onClick={() => navigate('/plan')}>Plan a Trip</button>
          <button className="button2" onClick={() => navigate('/explore')}>Explore Places</button>
        </div>
      </div>
    </>
  );
};

export default Home;
