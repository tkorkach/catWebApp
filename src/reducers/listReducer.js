import { GET_LISTS, GET_LIST, GET_ITEMS } from "../actions/types";

const initialState = {
  lists: [],
  list: {},
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload
      };
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
