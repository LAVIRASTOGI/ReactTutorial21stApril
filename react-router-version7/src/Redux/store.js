import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

// reducer
export const store = createStore(counterReducer);
