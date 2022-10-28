import React from 'react'

import "./InputLabel.scss";

export const InputLabel = ({labelText, type, placeholder, setValue}) => {
  return (
    <label className="inputLabel">
      <span className="inputLabel__text">{labelText}</span>
      <input
        className="inputLabel__input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  )
}

export default InputLabel;
