import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { hex2rgb } from '../../utils/ColorUtils.js';

const initialState = {
  hexColor: '',
  rgbColor: '',
  style: {}
};

function ColorConverter() {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    if (e.target.value.length > 7) {
      e.preventDefault();
      return;
    }

    setState((prev) => {
      const newState = {
        ...prev,
        hexColor: e.target.value
      };

      if (newState.hexColor.length === 7) {
        const color = hex2rgb(newState.hexColor);
        if (color) {
          newState.rgbColor = `rbg(${color.r}, ${color.g}, ${color.b})`;
          newState.style = {
            backgroundColor: newState.hexColor
          };
        } else {
          newState.rgbColor = 'Ошибка!';
        }
      }

      return newState;
    });
  }

  return (
    <div className="color-converter" style={state.style}>
      <form className="color-converter__form">
        <input
          className="color-converter__color color-converter__input-color"
          onChange={handleChange}
          value={state.hexColor}
        />
        <div className="color-converter__color color-converter__result-color">
          {state.rgbColor}
        </div>
      </form>
    </div>
  )
}

ColorConverter.propTypes = {

}

export default ColorConverter

