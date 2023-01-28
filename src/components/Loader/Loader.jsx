import React from 'react'

import styles from "./Loader.module.scss";

function Loader({ size="24px" }) {
  return (
    <span style={{height: size, width: size}} className={styles.loader}></span>
  )
}

export default Loader