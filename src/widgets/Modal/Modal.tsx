import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: #141718;
  border-radius: 10px !important;
  width: 100%;
  padding: 2px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const StyledModalBG = styled.div`
  background: #141718;
  border-radius: 10px !important;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  // border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
}) => (
  <StyledModal>
    <StyledModalBG>
      <ModalHeader>
        <ModalTitle>
          {onBack && (
            <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
              <ArrowBackIcon color="primary" />
            </IconButton>
          )}
          <Heading>{title}</Heading>
        </ModalTitle>
        {!hideCloseButton && (
          <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
            <CloseIcon color="primary" />
          </IconButton>
        )}
      </ModalHeader>
      <Flex flexDirection="column" p={bodyPadding}>
        {children}
      </Flex>
    </StyledModalBG>
  </StyledModal>
);

export default Modal;
