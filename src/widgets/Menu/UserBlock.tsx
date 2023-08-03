import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login, NetworkConfig } from "../WalletModal/types";
import Icon from "react-crypto-icons";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  networks?: Array<NetworkConfig>;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, networks }) => {
  const { onPresentConnectModal, onPresentAccountModal, onPresentNetworkModal } = useWalletModal(
    login,
    logout,
    account,
    networks
  );
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {networks && (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentNetworkModal();
          }}
          style={{ marginRight: 15 }}
        >
          <span style={{ marginRight: 5, display: "inline-block" }}>Network</span>
          <Icon name={networks[0].icon} size={20} />
        </Button>
      )}
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
