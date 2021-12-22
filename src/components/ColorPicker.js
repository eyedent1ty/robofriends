import React from 'react';

const ColorPicker = ({ inputChange, currentColor, color1, color2 }) => {
  return(
    <div>
      <input id="color1" type="color" onInput={inputChange} value={color1}/>
      <input id="color2" type="color" onInput={inputChange} value={color2}/>
      <h5>Current Color</h5>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorPicker;