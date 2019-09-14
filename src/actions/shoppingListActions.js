import axios from "axios";
import { GET_ERRORS } from "./types";

export const createList = (list, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/catsShoppingList/",
      list
    );
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
