import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      fullWidth
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
      }}
      style={{
        justifyContent: "space-between",
        background: "transparent",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "block",
        height: "144px",
        margin: "20px 0 13px",
        borderRadius: "550px",
      }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      {" "}
      {/* <Icon width="32px" /> */}
      <img src="images/metamask.png" style={{ width: "auto", maxWidth: "49px", margin: "8px 0 20px" }} />
      <Text bold color="primary">
        {title}
      </Text>
    </Button>
  );
};

export default WalletCard;
