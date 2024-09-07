import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { bigShouldersDisplay } from "@/lib/fonts";
// import { NavbarProps } from "@/lib/types";

export function Navbar() {
    const [selected, setSelected] = useState<"projects" | "techs" | "about_me" | "contact" | null>(null);
    const currentRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const currentDiv = currentRef.current;
        if(currentDiv && selected) {
            const itemEl = document.getElementById(selected);
            const itemWidth = itemEl && itemEl.offsetWidth;
            const itemLeft = itemEl && itemEl.offsetLeft;
            currentDiv.style.width = `${itemWidth}px`;
            currentDiv.style.left = `${itemLeft}px`;
        }
    }, [selected])
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li id="projects" onClick={()=>setSelected("projects")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="PROYECTOS">PROYECTOS</p>
                </li>
                <li id="techs" onClick={()=>setSelected("techs")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="TECNOLOGÍAS">TECNOLOGÍAS</p>
                </li>
                <li id="about_me" onClick={()=>setSelected("about_me")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="SOBRE MÍ">SOBRE MÍ</p>
                </li>
                <li id="contact" onClick={()=>setSelected("contact")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="CONTACTO">CONTACTO</p>
                </li>
                <div ref={currentRef} className={styles.current}></div>
            </ul>
        </nav>
    );
};
                        