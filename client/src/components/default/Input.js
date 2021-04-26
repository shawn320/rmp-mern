import React from "react";

const Input = (props) => {
  const { icon, labelText, tagText } = props;

  return (
    <div>
      <label className="flex py-2 h-8">
        <img alt="" src={icon} className="h-4" />
        <p className="flex text-rmp-dk-orange text-sm px-1 items-center">
          {labelText}
        </p>
        <p className="flex text-xs text-gray-700 items-center">{tagText}</p>
      </label>
      {props.children}
    </div>
  );
};

export default Input;
