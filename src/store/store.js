import { combineReducers, createStore } from "redux";
import authReducer from "./reducer/authReducer";
import { todoReducer } from "./reducer/todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});
const store = createStore(rootReducer);
export default store;
