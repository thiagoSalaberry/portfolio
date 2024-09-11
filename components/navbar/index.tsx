import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { bigShouldersDisplay } from "@/lib/fonts";
import { useRecoilState } from "recoil";
import { sectionAtom } from "@/lib/atoms";
// import { NavbarProps } from "@/lib/types";

export function Navbar() {
    const [section, setSection] = useRecoilState(sectionAtom);
    // const [selected, setSelected] = useState<"projects" | "techs" | "about_me" | "contact" | null>(null);
    const currentRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const currentDiv = currentRef.current;
        if(currentDiv && section) {
            const itemEl = document.getElementById(section);
            const itemWidth = itemEl && itemEl.offsetWidth;
            const itemLeft = itemEl && itemEl.offsetLeft;
            currentDiv.style.width = `${itemWidth}px`;
            currentDiv.style.left = `${itemLeft}px`;
        }
    }, [section])
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li id="projects" onClick={()=>setSection("projects")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="PROYECTOS">PROYECTOS</p>
                </li>
                <li id="techs" onClick={()=>setSection("techs")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="TECNOLOGÍAS">TECNOLOGÍAS</p>
                </li>
                <li id="about_me" onClick={()=>setSection("about_me")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="SOBRE MÍ">SOBRE MÍ</p>
                </li>
                <li id="contact" onClick={()=>setSection("contact")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="CONTACTO">CONTACTO</p>
                </li>
                <div ref={currentRef} className={styles.current}></div>
            </ul>
        </nav>
    );
};
                        