export const SET_OPEN_SEARCH_FIELD = "@@search/SET_OPEN_SEARCH_FIELD";
export const SET_CLOSE_SEARCH_FIELD = "@@search/SET_CLOSE_SEARCH_FIELD";
export const SET_SEARCH_INPUT_VALUE = "@@search/SET_SEARCH_INPUT_VALUE";
export const setFieldOpened = (boolean = true) => ({
  type: SET_OPEN_SEARCH_FIELD,
  payload: boolean,
});
export const setFieldClosed = (boolean = false) => ({
  type: SET_CLOSE_SEARCH_FIELD,
  payload: boolean,
});
export const setSearchInputValue = (string = "") => ({
  type: SET_SEARCH_INPUT_VALUE,
  payload: string,
});
