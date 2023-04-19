import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../actions/action';


 export const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.loading);
  const error = useSelector((state) => state.photos.error);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchPhotos());
      setFetching(false);
    }
  }, [dispatch, fetching]);

  const handleButtonClick = () => {
    setFetching(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Photos</h1>
      <button onClick={handleButtonClick}>Fetch photos</button>
      <div className="lista">
        {photos.map((photo) => (
          <div key={photo.id} className="item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div className="title">{photo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};




