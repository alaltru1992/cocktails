import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDrinksState, IDrinkRecord} from 'types';

const initialState: IDrinksState = {
    drinks: [],
}

export const drinksSlice = createSlice({
    name: 'drinksSlice',
    initialState,
    reducers:{
        addDrink: (state, action: PayloadAction<IDrinkRecord>) => {
            state.drinks.push(action.payload);
        },
    }
})
export default drinksSlice.reducer;
export const {addDrink} = drinksSlice.actions;