import React from "react";
import Button from "../default/Button";
import loginIcon from "../../assets/images/person_icon.svg";

const UserDashboard = (props) => (
  <div className="w-full flex justify-end items-center">
    <div className="text-white text-sm mt-12 -mr-2">
      <span className="flex">
        <Button
          text={props.dashboardText}
          classes="underline hover:text-gray-300 focus:outline-none"
        />
      </span>
      <span className="flex">
        <Button
          text={props.logoutText}
          classes="underline hover:text-gray-300 focus:outline-none"
        />
      </span>
    </div>
    <img
      alt={props.userAlt}
      src={loginIcon}
      className="h-12 sm:h-16 px-6 mt-12"
    />
  </div>
);

export default UserDashboard;
