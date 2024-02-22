import useBroadcastChannel from "../../hooks/use-broadcast-channel";
import {useEffect} from "react";
import {isControlKey, throttle} from "../../lib/events.ts";
import Slides from "../slides";
import Content from "../content";
import styles from "./styles.module.css";

export default function Controller() {
    const bc = useBroadcastChannel();

    useEffect(() => {
        function keyupListener(event: KeyboardEvent) {
            bc.postMessage({
                type: "controlKey",
                key: event.key,
                shiftKey: event.shiftKey,
            });
        }

        window.addEventListener("keydown", event => {
            if (!isControlKey(event.key) || event.key === "Shift" || event.key === "Meta") return;
            event.preventDefault();
            throttle(() => keyupListener(event), 100);
        })

        bc.onmessage = (event) => {
            if (event.data.type !== "currentSlide") return;
            Array.prototype.forEach.call(document.getElementsByClassName("active"), (el) => {
                el.classList.remove("active");
            });
            const currentSlide = document.getElementById(event.data.currentSlideId);
            if (currentSlide) {
                currentSlide.classList.add("active");
                currentSlide.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [bc]);

    return <Content className={styles.controller}>
        <Slides/>
    </Content>
}