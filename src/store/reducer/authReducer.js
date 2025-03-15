import { LOGIN, LOGOUT } from "../constants/ActionType";

const initialState = { isAuth: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isAuth: true };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
