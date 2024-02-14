import Reveal from 'reveal.js';
import {useLayoutEffect} from "react";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Intro from './slides/00-intro.mdx';
import Overview from './slides/10-overview.mdx';

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
                <section id="intro">
                    <Intro />
                </section>
                <section id="overview">
                    <Overview />
                </section>
            </div>
        </div>
    )
}
