import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      return {
        ...state,
        count: state.count + action.payload.count,
      };
    },
    decrement(state) {
      return {
        ...state,
        count: state.count - 1,
      };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
