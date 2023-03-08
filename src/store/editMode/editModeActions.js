export const SET_EDIT_MODE = "@@editMode/SET_EDIT_MODE";

export const setEditMode = (state = false) => ({
  type: SET_EDIT_MODE,
  payload: state,
});