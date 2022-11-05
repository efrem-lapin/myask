import React from 'react'

import styles from "./InputLabel.module.scss";

export const InputLabel = ({labelText, type, placeholder, setValue}) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>{labelText}</span>
      <input
      className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  )
}

export default InputLabel;
