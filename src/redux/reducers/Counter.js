import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    isLoading: false
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    }
  }
});

export const getPosts = (number) => (dispatch, getState) => {
  dispatch(toggleIsLoading());
};

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toggleIsLoading } =
  counterSlice.actions;

// Selectors
export const counterSelector = (state) => state.counter;



export default counterSlice.reducer;
