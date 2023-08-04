import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet1333" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginBottom: "8px",
        fontSize: "15px",
      }}
    >
      {account}
    </Text>
    <Flex mb="11px">
      {/* <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
        View on BscScan
      </LinkExternal> */}
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        style={{
          border: "0.863px solid rgba(255, 255, 255, 0.10)",
          background: "rgba(255, 255, 255, 0.03)",
          color: "#fff",
        }}
        size="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
