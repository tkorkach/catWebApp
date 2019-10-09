import axios from "axios";
import { GET_ERRORS, GET_LISTS, GET_LIST, GET_ITEMS } from "./types";

export const createOrUpdateList = (list, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/catsShoppingList/",
      list
    );
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteList = (id, history) => async dispatch => {
  try {
    const res = await axios.delete(
      `http://localhost:8080/api/catsShoppingList/${id}`
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

export const getItems = id => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/catsShoppingList/${id}/allItems`
  );
  dispatch({
    type: GET_ITEMS,
    payload: res.data
  });
};

export const getList = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/api/catsShoppingList/${id}`
  );
  dispatch({
    type: GET_LIST,
    payload: res.data
  });
};
