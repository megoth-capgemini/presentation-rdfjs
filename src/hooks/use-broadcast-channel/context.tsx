import {createContext} from "react";

const BroadcastChannelContext = createContext<BroadcastChannel>(new BroadcastChannel("controller"));

export default BroadcastChannelContext;