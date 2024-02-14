import Reveal from 'reveal.js';
import {useLayoutEffect} from "react";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

const deck = new Reveal({
    hash: true
});

export default function App() {
    useLayoutEffect(() => {
        deck.initialize();
    }, []);

    return (
        <div className="reveal">
            <div className="slides">
                <section>Slide 1</section>
                <section>Slide 2</section>
            </div>
        </div>
    )
}
