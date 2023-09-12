import axios from "axios";
import { USER_DATA_ERROR, USER_DATA_LOADING, USER_LOGIN } from "./actionType";




export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DATA_LOADING });
    let res = await axios.get("api").then((res) => {
      dispatch({ type: USER_LOGIN, payload: res.data });
      return res.data;
    });
    console.log(res);
  } catch (err) {
    dispatch({ type: USER_DATA_ERROR });
  }
};
 

