import { SET_ID } from "./idActions";

export const idReducer = (state = "", action) => {
    switch (action.type) {
      case SET_ID:
        return action.payload
        break;

      default:
        return state
        break;
    }
}