import React, { useReducer } from "react";

// Make a “keypad” with 6 buttons that must be pressed in the correct order to unlock it.
// Each correct button press advances the state. An incorrect button should reset it.

const reducer = (state, action) => {
  console.log("state: ", state, " action: ", action);
  switch (action.type) {
    case "buttonPress": {
      let nextState = {
        ...state,
        userEntries: `${state.userEntries}${action.payload}`,
        userMessage: "Waiting",
      };

      if (SECRET === nextState.userEntries) {
        nextState.userMessage = "YOU UNLOCKED THE CODE";
      }
      nextState = SECRET.startsWith(nextState.userEntries)
        ? nextState
        : { ...state, userEntries: "", userMessage: "Wrong passcode" };

      return nextState;
    }
    default:
      return state;
  }
};

// The actual keycode to unlock
const SECRET = "2345";

const Keypad = () => {
  const [state, dispatch] = useReducer(reducer, {
    userEntries: "",
    userMessage: "Waiting",
  });

  return (
    <div>
      <p>
        <button onClick={() => dispatch({ type: "buttonPress", payload: 1 })}>
          1
        </button>
        <button onClick={() => dispatch({ type: "buttonPress", payload: 2 })}>
          2
        </button>
        <button onClick={() => dispatch({ type: "buttonPress", payload: 3 })}>
          3
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "buttonPress", payload: 4 })}>
          4
        </button>
        <button onClick={() => dispatch({ type: "buttonPress", payload: 5 })}>
          5
        </button>
        <button onClick={() => dispatch({ type: "buttonPress", payload: 6 })}>
          6
        </button>
      </p>
      <p>Numbers entered: {state.userEntries}</p>
      <p>Current status: {state.userMessage}</p>
    </div>
  );
};

export default Keypad;
