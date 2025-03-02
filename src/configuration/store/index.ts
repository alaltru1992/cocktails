import { combineReducers, configureStore } from '@reduxjs/toolkit';
import drinksSlice from './reducers/drinks';

const rootReducer = combineReducers({
  drinksSlice: drinksSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
