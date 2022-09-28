import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import NetworkCard from "./NetworkCard";
import config from "./config";
import { Login, NetworkConfig } from "./types";

interface Props {
  networks?: Array<NetworkConfig>;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const NetworkModal: React.FC<Props> = ({ networks, onDismiss = () => null }) => {
  const [onlyMetaMask, setOnlyMetaMask] = useState(false);
  useEffect(() => {
    const onlyMetaMask = localStorage.getItem("onlyMetaMask");
    if (onlyMetaMask === "true") {
      setOnlyMetaMask(true);
    }
  }, []);
  return (
    <Modal title="Select Network" onDismiss={onDismiss}>
      <>
        {networks &&
          networks.map((entry, index) => (
            <NetworkCard
              key={entry.label}
              walletConfig={entry}
              onDismiss={onDismiss}
              disable={index > 0 ? false : true}
              mb={index < config.length - 1 ? "8px" : "0"}
            />
          ))}
      </>

      {/* <HelpLink */}
      {/*  href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain" */}
      {/*  external */}
      {/* > */}
      {/*  <HelpIcon color="primary" mr="6px" /> */}
      {/*  Learn how to connect */}
      {/* </HelpLink> */}
    </Modal>
  );
};

export default NetworkModal;
