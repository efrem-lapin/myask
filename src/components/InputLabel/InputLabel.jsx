import React from 'react'

import styles from "./InputLabel.module.scss";

export const InputLabel = ({labelText, type, placeholder, setValue, value = null}) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>{labelText}</span>
      <input
      className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={setValue}
        value={value}
      />
    </label>
  )
}

export default InputLabel;
