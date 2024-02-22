import {ReactNode} from "react";
import BroadcastChannelContext from "./context.tsx";

interface Props {
    children: ReactNode;
}

export default function BroadcastChannelContextProvider({children}: Props) {
    const broadcastChannel = new BroadcastChannel("controller");
    return <BroadcastChannelContext.Provider value={broadcastChannel}>
        {children}
    </BroadcastChannelContext.Provider>
}