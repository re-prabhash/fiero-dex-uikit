import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const IconButton = styled(Button)<ButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === "sm" ? "32px" : "31px")};
  height: ${({ size }) => (size === "sm" ? "32px" : "31px")};
`;

export default IconButton;
