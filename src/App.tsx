import Reveal from 'reveal.js';
import {useLayoutEffect} from "react";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css";
import "./theme.css";
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
            <div className="copyright">&copy; Capgemini {new Date().getFullYear()}. All rights reserved</div>
        </div>
    )
}
