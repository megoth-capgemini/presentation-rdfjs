import Reveal from 'reveal.js';
import {useEffect} from "react";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import Slides from "../slides";
import styles from "./styles.module.css";
import {clsx} from "clsx";
import useBroadcastChannel from "../../hooks/use-broadcast-channel";

export default function Presentation() {
    const bc = useBroadcastChannel();

    useEffect(() => {
        const deck = new Reveal({
            embedded: true,
            hash: true
        });
        deck.initialize();
        bc.onmessage = (event) => {
            if (event.data.type !== "keyup") return;
            switch (true) {
                case event.data.key === " " && event.data.shiftKey:
                    return deck.prev();
                case event.data.key === " ":
                    return deck.next();
                case event.data.key === "ArrowLeft":
                    return deck.left();
                case event.data.key === "ArrowRight":
                    return deck.right();
                case event.data.key === "ArrowUp":
                    return deck.up();
                case event.data.key === "ArrowDown":
                    return deck.down();
                case event.data.key === "Escape":
                case event.data.key === "o":
                    return deck.toggleOverview();
            }
        }
    }, [bc]);

    return <div className={clsx("reveal", styles.reveal)}>
        <Slides/>
    </div>
}