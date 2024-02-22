import {useContext} from "react";
import BroadcastChannelContext from "./context.tsx";

export default function useBroadcastChannel() {
    return useContext(BroadcastChannelContext);
}

