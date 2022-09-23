import { combineReducers } from "redux";
import { cardReducer } from "./CardReducer";

export const reducers = combineReducers({
  note: cardReducer,
});
