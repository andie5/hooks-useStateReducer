import React from "react";
import ReactDOM from "react-dom";
import LightSwitch from "./LightSwitchWithUseReducer";
import Keypad from "./KeypadUnlock";
// import LightSwitch from "./LightSwitchWithUseState";
// import Counter from "./Counter";
// import ShoppingList from "./ShoppingList";

ReactDOM.render(
  <React.StrictMode>
    <Keypad />
  </React.StrictMode>,
  document.getElementById("root")
);
