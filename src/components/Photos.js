import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../actions/action';

export const Photo = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.loading);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1> ¡Photos!</h1>
      <div className='lista-fotos'>
        {photos.map((photo)=>(
            <div key={photo.id} className='photo-id'>
                <img src={photo.thumbnailUrl} alt={photo.title}/>
                <div className='titulo'> {photo.title}</div>
                </div>
        ))}
        </div>
      </div>
  );
}


