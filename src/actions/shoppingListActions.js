import axios from "axios";
import { GET_ERRORS, GET_LISTS } from "./types";

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

export const getLists = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/catsShoppingList/all");
  dispatch({
    type: GET_LISTS,
    payload: res.data
  });
};
