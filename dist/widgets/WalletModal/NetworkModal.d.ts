import React from "react";
import { NetworkConfig } from "./types";
interface Props {
    networks?: Array<NetworkConfig>;
    onDismiss?: () => void;
}
declare const NetworkModal: React.FC<Props>;
export default NetworkModal;
