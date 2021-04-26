import React from "react";

const Field = (props) => (
  <div>
    <p className="text-rmp-dk-orange text-sm">
      {`${props.label}:`}
      <span className="text-gray-700 text-sm ml-4">{props.text}</span>
    </p>
  </div>
);

export default Field;
