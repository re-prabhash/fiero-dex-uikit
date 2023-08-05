import styled from "styled-components";
import { OverlayProps } from "./types";

const Overlay = styled.div.attrs({ role: "presentation" })<OverlayProps>`

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    backdrop-filter: blur(4px);
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  transition: opacity 0.4s;

  // position: fixed;
  // top: 0px;
  // left: 0px;
  // width: 100%;
  // height: 100%;
  // background-color: #000000b3;
  // transition: opacity 0.4s;
  // opacity: ${({ show }) => (show ? 0.6 : 0)};
  // z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
};

export default Overlay;
