import toggleModalStatus from "./toggle";
import { combineReducers } from "redux";

const statusReducer = combineReducers({
  toggleModalStatus,
});

export default statusReducer;
