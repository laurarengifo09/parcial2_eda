
import { FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS } from "../actions/action";

  const initialState = {
    loading: false,
    photos: [],
    error: '',
  };
  
   export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PHOTOS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PHOTOS_SUCCESS:
        return {
          loading: false,
          photos: action.payload,
          error: '',
        };
      case FETCH_PHOTOS_FAILURE:
        return {
          loading: false,
          photos: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
