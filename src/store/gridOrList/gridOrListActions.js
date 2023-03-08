
export const CHANGE_GRID_OR_LIST_TYPE = "@@grid-or-list/CHANGE_GRID_OR_LIST_TYPE";
export const changeGridOrListType = (string) => ({
  type: CHANGE_GRID_OR_LIST_TYPE,
  payload: string,
})