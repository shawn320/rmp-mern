import React from "react";
import footerImage from "../../assets/images/landscape.png";

const FooterBackground = (props) => (
  <img
    alt={props.footerImageAlt}
    src={footerImage}
    className="h-40 sm:h-60 w-full"
    style={{ backgroundColor: "#26374a" }}
  />
);

export default FooterBackground;
