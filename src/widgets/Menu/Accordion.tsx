import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  // border-style: solid;
  // border-width: 1px;
  // border-left: 2px solid ;
  // border-right: 2px solid ;
  // border-bottom: 2px solid ;
`;
const MainContainer = styled.div<{ isOpen: boolean; isPushed: boolean }>`
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-radius: 22px;
  margin: 6px;
  border-width: ${({ isOpen, isPushed }) => (isOpen && isPushed ? `1px` : 0)};
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MainContainer isOpen={isOpen} isPushed={isPushed}>
        <MenuEntry onClick={handleClick} className={className}>
          {icon}
          <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </MenuEntry>
        <AccordionContent
          isOpen={isOpen}
          isPushed={isPushed}
          maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
        >
          {children}
        </AccordionContent>
      </MainContainer>
    </Container>
  );
};

export default Accordion;
