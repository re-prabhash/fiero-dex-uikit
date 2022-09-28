import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import NetworkModal from "./NetworkModal";
import AccountModal from "./AccountModal";
import { Login, NetworkConfig } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
  onPresentNetworkModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string, networks?:Array<NetworkConfig>): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  const [onPresentNetworkModal] = useModal(<NetworkModal networks={networks} />);
  return { onPresentConnectModal, onPresentAccountModal, onPresentNetworkModal };
};

export default useWalletModal;
