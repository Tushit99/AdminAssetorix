import axios from "axios";
import {
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGUP,
} from "./actionType";

export const userRegisterAdmin = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_DATA_LOADING });
    await axios
      .post(`${process.env.REACT_APP_URL}/admin/register`, param)
      .then((res) => {
        localStorage.setItem("astadid", res.data.id);
        localStorage.setItem("astadName", res.data.name);
        localStorage.setItem("astadToken", res.data.token);
        dispatch({ type: USER_SIGUP, payload: res.data });
        return res.data;
      });
  } catch (err) {
    dispatch({ type: USER_DATA_ERROR, payload: err });
  }
};

export const userLoinAdmin = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_DATA_LOADING });
    await axios
      .post(`${process.env.REACT_APP_URL}/admin/login`, param)
      .then((res) => {
        localStorage.setItem("astadid", res.data.id);
        localStorage.setItem("astadName", res.data.name);
        localStorage.setItem("astadToken", res.data.token);
        dispatch({ type: USER_LOGIN, payload: res.data });
        return res.data;
      });
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_DATA_ERROR, payload: err });
  }
};

export const adminPrelogin = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_DATA_LOADING });
    await axios
      .get(`${process.env.REACT_APP_URL}/admin/`, { headers: param })
      .then((res) => {
        let id = localStorage.getItem("astadid");
        let token = localStorage.getItem("astadToken");
        localStorage.setItem("astadName", res.data.name);
        dispatch({ type: USER_LOGIN, payload: { ...res.data, id, token } });
        return res.data;
      });
    // console.log(res);
  } catch (err) {
    dispatch({ type: USER_DATA_ERROR });
  }
};

export const adminLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
