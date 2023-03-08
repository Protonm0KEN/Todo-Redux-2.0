import React from "react";
import "./ToDoItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../store/todos/todosActions";
import { setModalState } from "../../store/modal/modalActions";
import SvgIcons from "../SvgIcons";
import { setEditMode } from "../../store/editMode/editModeActions";
import { setId } from "../../store/todos/id/idActions";
const ToDoItem = ({ todo }) => {
  const { gridState, modalState, editModeState } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className={gridState === "list" ? "ToDoItem list" : "ToDoItem grid"}>
        <div
          className={
            gridState === "list" ? "ToDoItem__top list" : "ToDoItem__top grid"
          }
        >
          <p className="ToDoItem__title">{todo.title}</p>
          <p className="ToDoItem__date">{todo.date}</p>
        </div>
        <p className="ToDoItem__content">{todo.content}</p>
        <div className="ToDoItem__btns">
          <button className="trash-btn" onClick={() => dispatch(deleteTodo(todo.id))}>
            <SvgIcons id={"trash"} />
            УДАЛИТЬ
          </button>
          <button
            onClick={() => {
              dispatch(setModalState(!modalState));
              dispatch(setEditMode(!editModeState));
              dispatch(setId(todo.id))
            }}
            className="edit-btn"
          >
            <SvgIcons id={"pencil"} />
            РЕДАКТИРОВАТЬ
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
