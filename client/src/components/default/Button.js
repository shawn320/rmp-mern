import React from "react";

const Button = (props) => {
  const { classes, id, name, clicked, testId, text, icon, type } = props;
  return (
    <button
      className={classes}
      id={id}
      name={name}
      onClick={clicked}
      data-testid={testId}
      type={type}
    >
      {text}
      <span className="text-xl">{icon}</span>
    </button>
  );
};

export default Button;
