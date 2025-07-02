// src/routes/Routes.jsx
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import MapView from '../Components/MapView';
import PlanTrip from '../Components/PlanTrip';
import DetailsPage from '../pages/DetailsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plan" element={<PlanTrip />} />
      <Route path="/details/:placeName" element={<DetailsPage />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  );
}

export default AppRoutes;
