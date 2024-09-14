"use client"
import { Linkedin, Maximize2, Minimize2 } from "lucide-react";
import styles from "./styles.module.css";
import { Github } from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";
import { bigShouldersDisplay, poppins, inter } from "@/lib/fonts";
import { Button } from "@/ui";
export default function Page() {
    const mainRef = useRef<HTMLMediaElement>(null);
    const [opened, setOpened] = useState<number | null>(null);
    const handleOpened = (index:number):void => {
        setOpened(prev => prev == index ? null : index)
    }
    return (
        <div className={styles.page}>
            <Header/>
            <Navbar/>
            <main ref={mainRef} className={styles.grid}>
                <SectionSketch onOpen={()=>handleOpened(0)} gridRef={mainRef} title="SOBRE MÍ" opened={opened == 0}>.</SectionSketch>
                <SectionSketch onOpen={()=>handleOpened(1)} gridRef={mainRef} title="PROYECTO" opened={opened == 1}>.</SectionSketch>
                <SectionSketch onOpen={()=>handleOpened(2)} gridRef={mainRef} title="TECNOLOGÍAS" opened={opened == 2}>.</SectionSketch>
                <SectionSketch onOpen={()=>handleOpened(3)} gridRef={mainRef} title="EDUCACIÓN" opened={opened == 3}>.</SectionSketch>
                <SectionSketch onOpen={()=>handleOpened(4)} gridRef={mainRef} title="CONTACTO" opened={opened == 4}>.</SectionSketch>
            </main>
        </div>
    )
}

function Header() {
    const [language, setLanguage] = useState<"es" | "en">("es");
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
        <header className={styles.header}>
            <div className={`${styles.logo} ${inter.className}`}>teoxys</div>
            <div className={styles.header_right}>
                <div className={styles.language_container}>
                    <button id="es" onClick={()=>setLanguage("es")} className={`${styles.button} ${language == "es" && styles.selected} ${bigShouldersDisplay.className}`}>ES</button>
                    <button id="en" onClick={()=>setLanguage("en")} className={`${styles.button} ${language == "en" && styles.selected} ${bigShouldersDisplay.className}`}>EN</button>
                    <div ref={currentRef} className={styles.current}></div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.icons_container}>
                    <Linkedin size={20}/>
                    <Github size={20}/>
                </div>
            </div>
        </header>
    )
};
function Navbar() {
    const [selected, setSelected] = useState<number | null>(null);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <li onClick={()=>handleSelect(0)} className={`${styles.navbar_item} ${selected == 0 && styles.selected}`}>
                    SOBRE MÍ
                </li>
                <li onClick={()=>handleSelect(1)} className={`${styles.navbar_item} ${selected == 1 && styles.selected}`}>
                    PROYECTOS
                </li>
                <li onClick={()=>handleSelect(2)} className={`${styles.navbar_item} ${selected == 2 && styles.selected}`}>
                    TECNOLOGÍAS
                </li>
                <li onClick={()=>handleSelect(3)} className={`${styles.navbar_item} ${selected == 3 && styles.selected}`}>
                    EDUCACIÓN
                </li>
                <li onClick={()=>handleSelect(4)} className={`${styles.navbar_item} ${selected == 4 && styles.selected}`}>
                    CONTACTO
                </li>
            </ul>
        </nav>
    )
}
type SectionSketchProps = {
    title: string;
    children: React.ReactNode;
    opened:boolean;
    gridRef: React.RefObject<HTMLMediaElement>;
    onOpen: () => void;
}
function SectionSketch(props:SectionSketchProps) {
    return (
        <>
            <section
                style={props.opened ? {
                    top: `${props.gridRef.current?.offsetTop}px`,
                    left: `${props.gridRef.current?.offsetLeft}px`,
                    width: `${props.gridRef.current?.offsetWidth}px`,
                    height: `${props.gridRef.current?.offsetHeight}px`
                } : {}}
                className={styles.section}>
                <div className={styles.section_header}>
                    <h2 className={styles.section_title}>{props.title}</h2>
                    <div className={styles.section_button_container}>
                        <Button variant="mainIcon" onClick={props.onOpen}>{props.opened ? <Minimize2 /> : <Maximize2 />}</Button>
                    </div>
                </div>
            </section>
        </>
    )
}