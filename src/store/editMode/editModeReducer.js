import { SET_EDIT_MODE } from "./editModeActions";


export const editModeReducer = (state = false, action) => {
    switch (action.type) {
      case SET_EDIT_MODE:
        return !state
        break;
      default:
        return state
        break;
    }
}