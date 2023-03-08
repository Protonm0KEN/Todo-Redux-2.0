import { combineReducers } from "redux";
import { fieldSearchResultReducer, fieldStateReducer } from "./search/searchReducer";
import { gridOrListReducer } from "./gridOrList/gridOrLisReducer";
import { todosReducer } from "./todos/todosReducer";
import { modalReducer } from "./modal/modalReducer";
import { editModeReducer } from "./editMode/editModeReducer";
import { idReducer } from "./todos/id/idReducer";

export const rootReducer = combineReducers({
  fieldState: fieldStateReducer,
  fieldValue: fieldSearchResultReducer,
  gridState: gridOrListReducer,
  todos: todosReducer,
  modalState: modalReducer,
  editModeState: editModeReducer,
  id: idReducer
});