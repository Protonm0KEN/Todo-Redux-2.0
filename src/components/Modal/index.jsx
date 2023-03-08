import React, { useState } from "react";
import "./Modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../store/modal/modalActions";
import { createTodo, editTodo } from "../../store/todos/todosActions";
import { setEditMode } from "../../store/editMode/editModeActions";
const Modal = () => {
  const { modalState, editModeState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
  const handleChangeTitle = (e) => {
    if (editModeState === true) {
      return setNewTitle(e.target.value);
    } else {
      return setTitle(e.target.value);
    }
  };
  const [content, setContent] = useState("");
  const handleChangeContent = (e) => {
    if (editModeState === true) {
      return setNewContent(e.target.value);
    } else {
      return setContent(e.target.value);
    }
  }; 
  const newTodo = {
    title: title,
    content: content,
    date: `${new Date().getDate()}.${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`,
    id: `${Math.random().toString(36).substring(2, 12)}`,
  };
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(createTodo(newTodo));
    setTitle("");
    setContent("");
    dispatch(setModalState(!modalState));
  };
  const { id } = useSelector((state) => state);
  const newTodoEdited = {
    title: newTitle,
    content: newContent,
  };
  return (
    <>
      <div className={modalState ? "Modal active" : "Modal"}>
        <form
          onSubmit={(e) => e.preventDefault()}
          action="input"
          className={"Modal__form"}
        >
          <h4>{editModeState ? "Изменить" : "Добавить"} заметку</h4>
          <div className={"Modal__group"}>
            <input value={editModeState === true ? newTitle :title} onChange={handleChangeTitle} type="txt" />
            <span></span>
            <label>Title</label>
          </div>
          <div className={"Modal__group"}>
            <input value={editModeState === true ? newContent :content} onChange={handleChangeContent} type="text" />
            <span></span>
            <label>Content</label>
          </div>
          <div className={"Modal__btns"}>
            <button onClick={() => dispatch(setModalState(!modalState))}>
              Отмена
            </button>
            <button
              onClick={(e) => {
                if (editModeState === false) {
                  addTodo(e);
                }
                if (editModeState === true) {
                  dispatch(setEditMode(false));
                  dispatch(setModalState(!modalState));
                  dispatch(editTodo(newTodoEdited, id));
                  setNewTitle("")
                  setNewContent("")
                }
              }}
            >
              {editModeState === true ? "Изменить" : "Добавить"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
