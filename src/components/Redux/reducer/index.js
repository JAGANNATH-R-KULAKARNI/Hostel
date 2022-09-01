import toggleModalStatus from "./toggle";
import noOfNotificationsHandler from "./nonoti";
import { combineReducers } from "redux";

const statusReducer = combineReducers({
  toggleModalStatus,
  noOfNotificationsHandler,
});

export default statusReducer;
