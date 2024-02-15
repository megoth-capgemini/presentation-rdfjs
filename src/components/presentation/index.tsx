import Reveal from 'reveal.js';
import {useLayoutEffect} from "react";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import styles from "./styles.module.css";
import Slides from "../slides";
import {clsx} from "clsx";

const deck = new Reveal({
    hash: true
});

export default function Presentation() {
    useLayoutEffect(() => {
        deck.initialize();
    }, []);

    return (
        <div className={clsx("reveal", styles.reveal)}>
            <Slides />
            <div className={styles.copyright}>&copy; Capgemini {new Date().getFullYear()}. All rights reserved</div>
        </div>
    )
}