import React, { useEffect, useState } from "react";
import "./HeaderNav.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setFieldClosed,
  setFieldOpened,
  setSearchInputValue,
} from "../../store/search/searchActions";
import SvgIcons from "../SvgIcons"
const HeaderNav = () => {
  const globalReducers = useSelector((state) => state);
  const field = useSelector((state) => state.fieldState);
  const fieldValue = useSelector((state) => state.fieldValue);
  const dispatch = useDispatch();
  /* For checking reducers */
  // useEffect(() => {
  //   // console.log(`GlobalReducers: `);
  //   // console.log(globalReducers);
  //   // console.log(`Field State (Boolean) : ${field}`);
  // });
  const [inputValue, setValue] = useState("");
  const handleChangeInputValue = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    dispatch(setSearchInputValue(inputValue));
    /* For checking reducers */
    // console.log(`FieldValue: ${fieldValue}`);
  }, [inputValue]);
  return (
    <>
      <header className="Header">
        {field === false ? (
          <>
            <div className="Header__first">
              <h1 className="Header__first-title">Заметки</h1>
              <button onClick={() => dispatch(setFieldOpened(true))}>
                <SvgIcons id={"search"} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="Header__second">
              <button onClick={() => dispatch(setFieldClosed(false))}>
                <SvgIcons id={"back"} />
              </button>
              <div>
                <form>
                  <input
                    onChange={handleChangeInputValue}
                    value={inputValue}
                    className="Header__second-input"
                    placeholder="Поиск..."
                  ></input>
                </form>
              </div>
              <button onClick={() => dispatch(setFieldClosed(false))}>
                <SvgIcons id={"deny"} />
              </button>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default HeaderNav;
