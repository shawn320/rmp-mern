import React from "react";

const Tag = (props) => {
  return (
    <div className="flex bg-rmp-lt-blue text-rmp-dk-blue rounded-full my-2 py-2 px-4 items-center mr-2">
      {props.text}
      {props.removeButton}
    </div>
  );
};

export default Tag;
