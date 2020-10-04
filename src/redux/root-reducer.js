import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
const rootreducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export default rootreducer;
