import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGridOrListType } from "../../store/gridOrList/gridOrListActions";
import "./Main.scss";
import SvgIcons from "../SvgIcons";
import ToDoItem from "../ToDoItem";
import { setModalState } from "../../store/modal/modalActions";
const Main = () => {
  const dispatch = useDispatch();
  const { fieldState, gridState, todos, modalState } = useSelector(
    (state) => state
  );
  /* To checkState */
  // useEffect(() => {
  //   console.log(gridState);
  // }, [gridState]);
  const changeSortingType = () => {
    return gridState === "grid"
      ? dispatch(changeGridOrListType("list"))
      : dispatch(changeGridOrListType("grid"));
  };
  return (
    <>
      <main className="Main">
        <div className="todo">
          <div className="container">
            <div className="todo__top">
              <h2 className="todo__top-title">
                {fieldState ? "Поиск" : "Все заметки"}
              </h2>
              <button onClick={changeSortingType} className="grid-or-list">
                <SvgIcons id={gridState === "grid" ? "grid" : "list"} />
              </button>
            </div>
            <div
              className={
                gridState === "grid" ? "todo__bottom grid" : "todo__bottom list"
              }
            >
              {todos.map((todo) => {
                return <ToDoItem key={todo.id} todo={todo} />;
              })}
            </div>
          </div>
        </div>
        <button
          className="open-modal-main"
          onClick={() => dispatch(setModalState(!modalState))}
        >
          <SvgIcons id={"pencil"} />
        </button>
      </main>
    </>
  );
};

export default Main;
