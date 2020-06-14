import React, { useState } from "react";

// Make a “room” with a light that has 4 levels – off, low, medium, high using useState
// and change the level each time you press a button. Create a second button to turn the lights off.

const lightLevels = ["off", "low", "medium", "high"];

const LightSwitch = () => {
  const [light, setLight] = useState(0);

  const handleClick = () => {
    setLight((light) => {
      const nextLight = light + 1;
      return nextLight > 3 ? 0 : nextLight;
    });
  };

  const handleLightOff = () => {
    setLight(0);
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
