import React from "react";
// import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <figure viewBox="0 0 32 32" {...props}>
      <img width="32" height="32" src="images/footer_logo.png" alt="footer_logo" />
    </figure>
  );
};

export default Icon;
