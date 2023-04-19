import axios from 'axios';

export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const photos = response.data;
        dispatch(fetchPhotosSuccess(photos));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPhotosFailure(errorMsg));
      });
  };
};

export const fetchPhotosRequest = () => {
  return {
    type: FETCH_PHOTOS_REQUEST,
  };
};

export const fetchPhotosSuccess = (photos) => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos,
  };
};

export const fetchPhotosFailure = (error) => {
  return {
    type: FETCH_PHOTOS_FAILURE,
    payload: error,
  };
};
