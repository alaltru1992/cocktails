import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDrinksState, IDrinkRecord } from 'types';

const initialState: IDrinksState = {
  drinksArray: []
};

export const drinksSlice = createSlice({
  name: 'drinksSlice',
  initialState,
  reducers: {
    addDrink: (state, action: PayloadAction<IDrinkRecord>) => {
      state.drinksArray.push(action.payload);
    }
  }
});
export default drinksSlice.reducer;
export const { addDrink } = drinksSlice.actions;
