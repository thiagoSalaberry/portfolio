import { useState } from "react";
import styles from "./logo.module.css";

export default function  Logo() {
    return (
        <div className={styles["logo__container"]}>
            <div className={styles["logo__bar"]}></div>
            <div className={styles["logo__bar"]}></div>
            <div className={styles["logo__bar"]}></div>
        </div>
    )
}