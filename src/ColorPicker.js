import React from 'react';

const ColorPicker = ({ inputChange, currentColor }) => {
  return(
    <div>
      <input id="color1" type="color" onInput={inputChange}/>
      <input id="color2" type="color" onInput={inputChange}/>
      <h5>Current Color</h5>
      <p>{currentColor}</p>
    </div>
  );
}

export default ColorPicker;