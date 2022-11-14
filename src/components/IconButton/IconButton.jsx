import React from 'react'

import IconLib from "../../services/icons";

function IconButton({icon}) {
    const lib = new IconLib();
  return (
    <div>
        <button>{lib.getIcon(icon)}</button>
    </div>
  )
}

export default IconButton;