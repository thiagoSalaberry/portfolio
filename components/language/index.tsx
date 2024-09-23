import { useState } from "react"
import styles from "./language.module.css";
import { languajeState } from "@/atoms/languageState";
import { useRecoilState } from "recoil";
export default function Language() {
    const [selected, setSelected] = useState<"es" | "en">("es");
    const [_, setLanguage] = useRecoilState(languajeState);
    const handleClick = (lang:"es" | "en") => {
        setSelected(lang);
        setLanguage(lang);
    }
    return (
        <div className={styles["header__rigth__content"]}>
            <div className={styles["languaje__buttons__container"]}>
                <button
                    className={`${styles["languaje__button"]} ${selected == "es" ? styles["selected"] : ""}`}
                    onClick={() => handleClick("es")}
                    >ES</button>
                <button
                    className={`${styles["languaje__button"]} ${selected == "en" ? styles["selected"] : ""}`}
                    onClick={() => handleClick("en")}
                    >EN</button>
            </div>
        </div>
    )
}