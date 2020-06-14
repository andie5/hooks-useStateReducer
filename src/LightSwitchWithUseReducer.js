import React, { useReducer } from "react";

// Make a “room” with a light that has 4 levels – off, low, medium, high using useReducer
// and change the level each time you press a button. Create a second button to turn the lights off.

const lightLevels = ["off", "low", "medium", "high"];

const lightReducer = (light, action) => {
  switch (action) {
    case "increment": {
      const nextLight = light + 1;
      return nextLight > 3 ? 0 : nextLight;
    }
    case "off":
      return 0;
    default:
      return light;
  }
};

const LightSwitch = () => {
  const [light, dispatch] = useReducer(lightReducer, 0);

  const handleClick = () => {
    //   Here you can just pass the string action because the reducer is using the action directly
    // not action.type. if it was using action.type, you would need to pass {type: "increment"}
    dispatch("increment");
  };

  const handleLightOff = () => {
    dispatch("off");
  };

  return (
    <div>
      <p>The light is now {lightLevels[light]}</p>
      <p>
        <button onClick={handleClick}>Change light</button>
      </p>
      <p>
        <button onClick={handleLightOff}>Turn Light Off</button>
      </p>
    </div>
  );
};

export default LightSwitch;
