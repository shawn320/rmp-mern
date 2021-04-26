import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/canada_footer_logo.svg";
import FooterBackground from "./FooterBackground";

const Footer = (props) => {
  const {
    linkSocial,
    textSocial,
    linkMobile,
    textMobile,
    linkAbout,
    textAbout,
    linkTerms,
    textTerms,
    linkPrivacy,
    textPrivacy,
    linkDTS,
    textDTS,
    textTop,
    footerSymbol,
  } = props;
  return (
    <div className="leading-10 bg-white p-4 m-auto w-full">
      <FooterBackground />
      <div className="container-links">
        <nav className="py-8 xl:flex xl:mx-10 font-body text-sm">
          <ul
            id="fLinks"
            className="md:grid md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto"
          >
            <li className="hover:text-gray-700 pb-2">
              <a href={linkSocial} target="_blank" rel="noreferrer">
                {textSocial}
              </a>
            </li>
            <li className="hover:text-gray-700 pb-2">
              <a href={linkMobile} target="_blank" rel="noreferrer">
                {textMobile}
              </a>
            </li>
            <li className="hover:text-gray-700 pb-2">
              <a href={linkAbout} target="_blank" rel="noreferrer">
                {textAbout}
              </a>
            </li>
            <li className="hover:text-gray-700 pb-2">
              <a href={linkTerms} target="_blank" rel="noreferrer">
                {textTerms}
              </a>
            </li>
            <li className="hover:text-gray-700 pb-2">
              <a href={linkPrivacy} target="_blank" rel="noreferrer">
                {textPrivacy}
              </a>
            </li>
            <li className="hover:text-gray-700 pb-2">
              <a href={linkDTS} target="_blank" rel="noreferrer">
                {textDTS}
              </a>
            </li>
          </ul>
          <div className="flex justify-between xl:inline-block xl:mx-auto">
            <div className="pt-6 pl-2 xl:hidden">
              <a href="#nav-top-page">
                <span className="glyphicon glyphicon-chevron-up">
                  {textTop}
                </span>
              </a>
            </div>
            <div id="footer-img">
              <img
                id="cnd-img"
                src={footerLogo}
                alt={footerSymbol}
                title={footerSymbol}
                className="h-10 mb-2 mt-4 xl:mt-2"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
