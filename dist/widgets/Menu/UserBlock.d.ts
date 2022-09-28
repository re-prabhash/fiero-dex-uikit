import React from "react";
import { Login, NetworkConfig } from "../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    networks?: Array<NetworkConfig>;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
