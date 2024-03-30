import { useState } from "react";
import styles from "./hamburguer.module.css";

export default function  Hamburguer() {
    const [hovered, setHovered] = useState(false);
    return (
        <div 
            className={`${styles["hamburguer__container"]} ${hovered ? styles["hovered"]: ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`${styles["hamburguer__bar"]} ${hovered ? styles["hovered"]: ""}`}></div>
            <div className={`${styles["hamburguer__bar"]} ${hovered ? styles["hovered"]: ""}`}></div>
            <div className={`${styles["hamburguer__bar"]} ${hovered ? styles["hovered"]: ""}`}></div>
        </div>
    )
}