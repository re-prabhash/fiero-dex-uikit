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
      <image width="100%" href={isDark ? "/images/LogoTextNewDark.png" : "/images/LogoTextNewWhite.png"} />
    </figure>
  );
};

export default Logo;
