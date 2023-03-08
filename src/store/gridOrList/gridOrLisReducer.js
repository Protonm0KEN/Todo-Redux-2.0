import {
  CHANGE_GRID_OR_LIST_TYPE,
} from "./gridOrListActions";

export const gridOrListReducer = (initialState = "list", action) => {
  switch (action.type) {
    case CHANGE_GRID_OR_LIST_TYPE:
      return action.payload;
      break;
    default:
      return initialState;
      break;
  }
};
