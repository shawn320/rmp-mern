import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {
  const { textSearch, textAdd } = props;
  const classes =
    "w-full p-4 h-16 text-rmp-dk-orange focus:outline-none shadow-lg underline flex justify-center";
  return (
    <nav className="sm:flex w-full px-4 -mt-4">
      <NavLink
        to="/search"
        className={classes}
        activeClassName="bg-rmp-dk-orange"
        activeStyle={{ color: "white" }}
      >
        {textSearch}
      </NavLink>
      <NavLink
        to="/add"
        className={classes}
        activeClassName="bg-rmp-dk-orange text-white"
        activeStyle={{ color: "white" }}
      >
        {textAdd}
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
