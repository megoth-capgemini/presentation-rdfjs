import {createContext} from "react";

const BroadcastChannelContext = createContext<BroadcastChannel>(new BroadcastChannel(crypto.randomUUID()));

export default BroadcastChannelContext;