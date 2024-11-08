import styles from "./styles.module.css";
import {MdScreenShare} from "react-icons/md";
import {NavLink, Outlet, ScrollRestoration} from "react-router-dom";
import "./global.css";
import useBroadcastChannel from "../../hooks/use-broadcast-channel";

export default function Layout() {
    const presentationId = useBroadcastChannel().name;

    return <>
        <Outlet/>
        <footer className={styles.footer}>
            <div className={styles.copyright}>&copy; Capgemini {new Date().getFullYear()}. All rights reserved</div>
            <NavLink to={`/${presentationId}`} className={styles.controller} target="_blank">
                <span className={styles.controllerIcon}><MdScreenShare/></span>
                <span className={styles.controllerText}>Open controller</span>
            </NavLink>
            <ScrollRestoration/>
        </footer>
    </>
}