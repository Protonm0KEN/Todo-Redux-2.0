import {
  SET_CLOSE_SEARCH_FIELD,
  SET_OPEN_SEARCH_FIELD,
  SET_SEARCH_INPUT_VALUE,
} from "./searchActions";

export const fieldStateReducer = (initialState = false, action) => {
  switch (action.type) {
    case SET_OPEN_SEARCH_FIELD:
      return action.payload;
      break;
    case SET_CLOSE_SEARCH_FIELD:
      return action.payload;
      break;
    default:
      return initialState;
      break;
  }
};
export const fieldSearchResultReducer = (initialState = "", action) => {
  switch (action.type) {
    case SET_SEARCH_INPUT_VALUE:
      return action.payload;
      break;
    default:
      return initialState;
      break;
  }
};
