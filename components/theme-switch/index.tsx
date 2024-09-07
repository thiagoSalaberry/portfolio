import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
// import { ThemeSwitchProps } from "@/lib/types";
import { Sun, Moon } from "react-bootstrap-icons";
export function ThemeSwitch() {
    const [selected, setSelected] = useState<"light" | "dark">("light");
    const currentRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const currentDiv = currentRef.current;
        if(currentDiv) {
            const themeEl = document.getElementById(selected);
            const themeWidth = themeEl && themeEl.offsetWidth;
            const themeHeight = themeEl && themeEl.offsetHeight;
            const themeLeft = themeEl && themeEl.offsetLeft;
            currentDiv.style.width = `${themeWidth}px`;
            currentDiv.style.height = `${themeHeight}px`;
            currentDiv.style.left = `${themeLeft}px`;
        }
    }, [selected])
    return (
        <div className={styles.container}>
            <button id="light" onClick={()=>setSelected("light")} className={`${styles.button} ${selected == "light" && styles.selected}`}>
                <Sun size={20}/>
            </button>
            <button id="dark" onClick={()=>setSelected("dark")} className={`${styles.button} ${selected == "dark" && styles.selected}`}>
                <Moon size={20}/>
            </button>
            <div ref={currentRef} className={styles.current}></div>
        </div>
    );
};
                        