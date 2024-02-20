import Reveal from 'reveal.js';
import {useEffect} from "react";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import Slides from "../slides";
import styles from "./styles.module.css";
import {clsx} from "clsx";

export default function Presentation() {
    useEffect(() => {
        const deck = new Reveal({
            hash: true
        });
        deck.initialize({
            embedded: true
        });
    }, []);

    return <div className={clsx("reveal", styles.reveal)}>
        <Slides/>
    </div>
}