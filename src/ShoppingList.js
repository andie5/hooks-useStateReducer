import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        },
      ];
    case "remove":
      //   keep every item except the item we want to remove
      return state.filter((_, index) => index !== action.index);
    case "clear":
      //   reset the state
      return [];
    default:
      return state;
  }
};

const ShoppingList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    //  avoid a full page reload when submit button is pressed.
    e.preventDefault();
    dispatch({ type: "add", name: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button onClick={() => dispatch({ type: "clear" })}>Clear list</button>
      </p>
    </>
  );
};

export default ShoppingList;
