import React from "react";
import { NavLink } from "react-router-dom";

const Switch = (props) => {
  const { engagement, contact, textEngagement, textContact } = props;
  const classes =
    "w-30 px-4 py-2 h-12 border border-gray-200 focus:outline-none shadow-lg flex justify-center items-center hover:bg-rmp-md-blue hover:text-white";

  return (
    <nav className="flex py-4 text-sm">
      <NavLink
        to={engagement}
        className={`rounded-l-3xl ${classes}`}
        activeClassName="bg-rmp-md-blue text-white"
      >
        {textEngagement}
      </NavLink>
      <NavLink
        to={contact}
        className={`rounded-r-3xl ${classes}`}
        activeClassName="bg-rmp-md-blue text-white"
      >
        {textContact}
      </NavLink>
    </nav>
  );
};

export default Switch;
