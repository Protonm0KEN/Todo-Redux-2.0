export const SET_ID = "@@id/SET_ID";
export const setId = (id = "") => ({
  type: SET_ID,
  payload: id,
});
