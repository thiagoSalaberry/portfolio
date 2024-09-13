import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { bigShouldersDisplay } from "@/lib/fonts";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageAtom, sectionAtom } from "@/lib/atoms";
import translation from "@/lib/translation.json"
// import { NavbarProps } from "@/lib/types";

export function Navbar() {
    const [section, setSection] = useRecoilState(sectionAtom);
    const language = useRecoilValue(languageAtom);
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
        if(currentDiv && section == null) {
            currentDiv.style.width = '0px';
            currentDiv.style.left = '0px';
        }
    }, [section, language]);
    const content = {
        projects: translation[language].header_nav[0],
        techs: translation[language].header_nav[1],
        contact: translation[language].header_nav[2],
    }
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li id="projects" onClick={()=>setSection("projects")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content={content.projects}>{content.projects}</p>
                </li>
                <li id="techs" onClick={()=>setSection("techs")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content={content.techs}>{content.techs}</p>
                </li>
                {/* <li id="about_me" onClick={()=>setSection("about_me")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content="SOBRE MÍ">SOBRE MÍ</p>
                </li> */}
                <li id="contact" onClick={()=>setSection("contact")} className={styles.nav_list_item}>
                    <p className={bigShouldersDisplay.className} data-content={content.contact}>{content.contact}</p>
                </li>
                <div ref={currentRef} className={styles.current}></div>
            </ul>
        </nav>
    );
};
                        