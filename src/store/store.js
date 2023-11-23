import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './reducers/placeReducer';

const store = configureStore({
  reducer: {
    places: placeReducer,
  },
});

export default store;
