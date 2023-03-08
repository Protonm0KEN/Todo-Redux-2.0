export const SET_STATE_MODAL = "@@modal/SET_STATE_MODAL";
export const setModalState = (boolean = false) => ({
    type: SET_STATE_MODAL,
    payload: boolean
})