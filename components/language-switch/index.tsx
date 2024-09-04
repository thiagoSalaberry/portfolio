import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { bigShouldersDisplay } from "@/lib/fonts";
// import { LanguageSwitchProps } from "@/lib/types";

export function LanguageSwitch() {
    const [selected, setSelected] = useState<"es" | "en">("es");
    const currentRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const currentDiv = currentRef.current;
        if(currentDiv) {
            const languageEl = document.getElementById(selected);
            const langWidth = languageEl && languageEl.offsetWidth;
            const langLeft = languageEl && languageEl.offsetLeft;
            currentDiv.style.width = `${langWidth}px`;
            currentDiv.style.left = `${langLeft}px`;
        }
    }, [selected]);
    return (
        <div className={styles.container}>
            <button id="es" onClick={()=>setSelected("es")} className={`${styles.button} ${selected == "es" && styles.selected} ${bigShouldersDisplay.className}`}>ES</button>
            <button id="en" onClick={()=>setSelected("en")} className={`${styles.button} ${selected == "en" && styles.selected} ${bigShouldersDisplay.className}`}>EN</button>
            <div ref={currentRef} className={styles.current}></div>
        </div>
    );
};
                        