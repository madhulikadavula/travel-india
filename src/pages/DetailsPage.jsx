import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceDetails from '../Components/PlaceDetails';

function DetailsPage() {
  const { placeName } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/place/${placeName}`)
      .then(res => res.json())
      .then(data => setPlace(data));
  }, [placeName]);

  if (!place) return <p>Loading...</p>;

  return <PlaceDetails place={place} />;
}
export default DetailsPage;
