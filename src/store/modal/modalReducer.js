import { SET_STATE_MODAL } from "./modalActions";

export const modalReducer = (state = false, action) => {
    switch (action.type) {
        case SET_STATE_MODAL:
            return action.payload
            break;
        default:
            return state
            break;
    }
}