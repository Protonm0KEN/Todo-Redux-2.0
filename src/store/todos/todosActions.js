export const CREATE_TODO = "@@todos/CREATE_TODO";
export const DELETE_TODO = "@@todos/DELETE_TODO";
export const EDIT_TODO = "@@todos/EDIT_TODO";
export const createTodo = (obj) => ({
  type: CREATE_TODO,
  payload: obj
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
export const editTodo = (obj, id) => ({
  type: EDIT_TODO,
  payload: obj,
  id: id
});