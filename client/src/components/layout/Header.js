import React from "react";
import Button from "../default/Button";
import UserDashboard from "../common/UserDashboard";
import headerImage from "../../assets/images/canada_header.svg";
import homeButton from "../../assets/images/Home.svg";
import background from "../../assets/images/wave.png";
const Header = (props) => {
  const {
    logoAlt,
    officialPage,
    languageButtonText,
    languageButtonHandler,
    homeAlt,
    titleText,
    dashboardText,
    logoutText,
    userAlt,
    goHome,
  } = props;

  return (
    <div className="py-4 m-auto w-full">
      <div className="flex w-full h-full">
        <span className="flex w-full justify-start">
          <a href={officialPage}>
            <img
              alt={logoAlt}
              className="px-6"
              width={300}
              height={300}
              src={headerImage}
            />
          </a>
        </span>
        <Button
          text={languageButtonText}
          classes="flex justify-end w-full text-sm px-6 underline focus:outline-none hover:text-gray-700"
          clicked={languageButtonHandler}
        />
      </div>
      <div
        className="h-40 sm:h-60 flex"
        style={{ backgroundImage: `url(${background})` }}
      >
        <span className="w-full flex justify-start items-center">
          <img
            alt={homeAlt}
            src={homeButton}
            className="h-12 sm:h-16 px-6 mt-12"
            onClick={goHome}
          />
        </span>
        <span className="w-full flex justify-center items-center">
          <h1 className="invisible sm:visible text-white text-2xl mt-12">
            {titleText}
          </h1>
        </span>
        <UserDashboard
          dashboardText={dashboardText}
          logoutText={logoutText}
          userAlt={userAlt}
        />
      </div>
    </div>
  );
};

export default Header;
