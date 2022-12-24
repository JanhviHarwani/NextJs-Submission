import React from "react";
import css from "./Card.module.css";
function Card(props) {
  const { children, ...rest } = props;
  return (
    <div {...rest} className={`${css.card} ${props.className}`}>
      {children}
    </div>
  );
}

export default Card;
