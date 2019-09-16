import { GET_LISTS } from "../actions/types";

const initialState = {
  lists: [],
  list: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload
      };
    default:
      return state;
  }
}
