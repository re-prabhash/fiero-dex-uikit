import { Login, NetworkConfig } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
    onPresentNetworkModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined, networks?: NetworkConfig[] | undefined) => ReturnType;
export default useWalletModal;
