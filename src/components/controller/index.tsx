import useBroadcastChannel from "../../hooks/use-broadcast-channel";
import {useEffect} from "react";
import throttle from "../../lib/throttle.ts";

export default function Controller() {
    const bc = useBroadcastChannel();

    useEffect(() => {
        function keyupListener(event: KeyboardEvent) {
            if (event.key === "Shift" || event.key === "Meta") return;
            bc.postMessage({
                type: event.type,
                key: event.key,
                shiftKey: event.shiftKey,
            });
        }

        window.addEventListener("keyup", event => {
            throttle(() => keyupListener(event), 100);
        });
    }, [bc]);

    return <>TEST</>;
}