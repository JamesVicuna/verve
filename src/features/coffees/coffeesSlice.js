import { createSlice } from "@reduxjs/toolkit";
import { COFFEES } from "../../app/data/COFFEES";

const initialState = {
   coffeesArray: COFFEES
};

const coffeesSlice = createSlice({
   name: 'coffees',
   initialState
});

export const coffeesReducer = coffeesSlice.reducer; 

export const selectAllCoffees = (state) => {
   return state.coffees.coffeesArray;
}

export const selectCoffeeById = (id) => (state) => {
   return state.coffees.coffeesArray.find((coffee) => coffee.id === parseInt(id))
};

export const selectFeaturedCoffee = (state) => {
   return state.coffees.coffeesArray.find((coffee)=> coffee.featured)
};