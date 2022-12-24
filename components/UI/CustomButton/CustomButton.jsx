import React from "react";
import css from "./CustomButton.module.css";
function CustomButton(props) {
  const { children, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${css.bn632hover} ${css.bn27} ${props.className}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
