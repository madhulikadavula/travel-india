// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './Components/Details';
import Home from './Components/Home';
import MapView from './Components/MapView';
import PlanTrip from './Components/PlanTrip';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/details/:location" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
