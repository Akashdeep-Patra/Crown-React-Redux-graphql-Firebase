import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const rootreducer = combineReducers({
  user: userReducer,
});
export default rootreducer;
