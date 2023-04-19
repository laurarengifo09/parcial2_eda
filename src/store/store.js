import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import thunk from 'redux-thunk';
import { photosReducer } from '../reducers/reduce';

const rootReducer = combineReducers({
  photos: photosReducer,
});

 export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

