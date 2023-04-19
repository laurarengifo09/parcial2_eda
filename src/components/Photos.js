import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../actions/action';
import './estilos.css'
import { Lista } from './Lista';


 export const Photos = () => {
  const dispatch = useDispatch();
  
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

  return (
    <div id='b'>
      <h1 className='titulo'>PHOTOS</h1>
      <button classname='a' id="a" onClick={handleButtonClick}>Cargar</button>
     <Lista></Lista>
    </div>
  );
};




