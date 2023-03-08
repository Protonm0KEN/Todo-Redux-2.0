import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from "./todosActions";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
      break;
    case DELETE_TODO:
      return [
        ...state.filter((todo) => {
          return todo.id != action.payload;
        }),
      ];
    case EDIT_TODO:
      function logId() {
        return [
          ...state.map((todo) => {
            if (todo.id === action.id) {
              todo.title = action.payload.title;
              todo.content = action.payload.content;
              return todo;
            }
          }),
        ];
      }
      logId();
      break;
    default:
      return state;
      break;
  }
};
