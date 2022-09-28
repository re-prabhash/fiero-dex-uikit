import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const [onlyMetaMask, setOnlyMetaMask] = useState(false);
  useEffect(() => {
    const onlyMetaMask = localStorage.getItem("onlyMetaMask");
    if (onlyMetaMask === "true") {
      setOnlyMetaMask(true);
    }
  }, []);
  return (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>
      {onlyMetaMask ? (
        <WalletCard key={config[0].title} login={login} walletConfig={config[0]} onDismiss={onDismiss} mb={"0"} />
      ) : (
        <>
          {config.map((entry, index) => (
            <WalletCard
              key={entry.title}
              login={login}
              walletConfig={entry}
              onDismiss={onDismiss}
              mb={index < config.length - 1 ? "8px" : "0"}
            />
          ))}
        </>
      )}

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

export default ConnectModal;
