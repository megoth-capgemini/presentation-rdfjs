import {ReactNode} from "react";
import BroadcastChannelContext from "./context.tsx";
import {useParams, useSearchParams} from "react-router-dom";

interface Props {
    children: ReactNode;
}

export default function BroadcastChannelContextProvider({children}: Props) {
    const [searchParams] = useSearchParams();
    const params = useParams();
    const presentationId = searchParams.get("presentationId") || params.presentationId || crypto.randomUUID();
    const broadcastChannel = new BroadcastChannel(presentationId);
    return <BroadcastChannelContext.Provider value={broadcastChannel}>
        {children}
    </BroadcastChannelContext.Provider>
}