import { useState } from "react"
import styles from "./header.module.css";
import Logo from "../logo";
import Hamburguer from "../hamburguer";
export default function Header() {
    const [selected, setSelected] = useState<"es" | "en">("es");
    return (
        <header className={styles["header"]}>
            <Logo />
            {/* <p className={styles["waving__animation"]}>🖐</p> */}
            <div className={styles["header__rigth__content"]}>
                <div className={styles["languaje__buttons__container"]}>
                    <button
                        className={`${styles["languaje__button"]} ${selected == "es" ? styles["selected"] : ""}`}
                        onClick={() => setSelected("es")}
                        >ES</button>
                    <button
                        className={`${styles["languaje__button"]} ${selected == "en" ? styles["selected"] : ""}`}
                        onClick={() => setSelected("en")}
                        >EN</button>
                </div>
                <Hamburguer />
            </div>
        </header>
    )
}