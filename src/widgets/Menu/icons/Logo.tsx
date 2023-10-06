import React from "react";
// import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <figure viewBox="0 0 32 32" {...props}>
      <img
        width="100%"
        height="32"
        src={isDark ? "/images/LogoTextNewDark.png" : "/images/LogoTextNewWhite.png"}
        alt=""
      />
    </figure>
  );
};

export default Logo;
