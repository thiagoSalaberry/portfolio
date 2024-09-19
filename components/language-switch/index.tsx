import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { bigShouldersDisplay } from "@/lib/fonts";
import { useRecoilState } from "recoil";
import { languageAtom } from "@/lib/atoms";

export function LanguageSwitch() {
    const [language, setLanguage] = useRecoilState(languageAtom);
    const currentRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const currentDiv = currentRef.current;
        if(currentDiv) {
            const languageEl = document.getElementById(language);
            const langWidth = languageEl && languageEl.offsetWidth;
            const langLeft = languageEl && languageEl.offsetLeft;
            currentDiv.style.width = `${langWidth}px`;
            currentDiv.style.left = `${langLeft}px`;
        }
    }, [language]);
    return (
        <div className={styles.container}>
            <button id="es" onClick={()=>setLanguage("es")} className={`${styles.button} ${language == "es" && styles.selected} ${bigShouldersDisplay.className}`}>ES</button>
            <button id="en" onClick={()=>setLanguage("en")} className={`${styles.button} ${language == "en" && styles.selected} ${bigShouldersDisplay.className}`}>EN</button>
            <div ref={currentRef} className={styles.current}></div>
        </div>
    );
};
                        