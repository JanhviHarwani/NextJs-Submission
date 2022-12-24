import React from "react";
import css from "./basicButton.module.css";
function BasicButton(props) {
  const { children, ...rest } = props;
  return (
    <button {...rest} className={`${css.postButton} ${props.className}`}>
      {children}
    </button>
  );
}

export default BasicButton;
