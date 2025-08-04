import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./userReducer";
import { thunk } from "redux-thunk";

// reducer

const reducerCombine = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
export const store = createStore(
  reducerCombine,
  composeWithDevTools(applyMiddleware(thunk))
);
