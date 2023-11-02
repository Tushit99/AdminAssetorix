import {
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGUP,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false, 
  name: "",
  id: "",
  token: "",
  role: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case USER_SIGUP:
      return {
        ...state,
        name: payload.name,
        id: payload.id,
        token: payload.token,
        role: payload.role,
        isLoading: false,
        isError: false,
      };
    case USER_LOGIN:
      return {
        ...state,
        name: payload.name,
        id: payload.id,
        token: payload.token,
        role: payload.role,
        isLoading: false,
        isError: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        name: "",
        id: "",
        token: "",
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
