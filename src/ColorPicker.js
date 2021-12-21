import React from 'react';

const ColorPicker = ({ inputChange }) => {
  return(
    <div>
      <input id="color1" type="color" onInput={inputChange}/>
      <input id="color2" type="color" onInput={inputChange}/>
    </div>
  );
}

export default ColorPicker;