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
    };
    const [cellStyles, setCellStyles] = useState<{
        left:number,
        top:number,
        width:number,
        height:number,
      }[]>([])
    const refs:React.RefObject<HTMLTableSectionElement>[] = [...Array(5)].map(_ => useRef<HTMLTableSectionElement>(null))
    const [currentRef, setCurrentRef] = useState<number | null>(null);
    const updateCellStyles =  () => {
        const newStyles = refs.map(cellRef => {
         const cell = cellRef.current;
         if(cell) {
          const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = cell;
          return {left: offsetLeft, top: offsetTop, width: offsetWidth, height: offsetHeight };
         }
         return {}      
        });
        setCellStyles(newStyles as typeof cellStyles);
      }
      const handleSelect = (index:number):void => {
        setCurrentRef(prev => prev == index ? null : index)
      }
      useEffect(()=>{
        updateCellStyles();
        window.addEventListener("resize", updateCellStyles);
        return () => window.removeEventListener("resize", updateCellStyles)
      }, []);
    const sectionMap = {
        0: "SOBRE MÍ",
        1: "PROYECTOS",
        2: "TECNOLOGÍAS",
        3: "EDUCACIÓN",
        4: "CONTACTO",
    }
    return (
        <div className={styles.page}>
            <Header/>
            <Navbar/>
            <main ref={mainRef} className={styles.grid}>
                {refs.map((cellRef, index) => {
                    const cellNumber = `cell_${index + 1}`;
                    return (
                        <>
                            <section
                                className={`${styles.section_skeleton} ${styles[cellNumber]}`}
                                ref={cellRef}
                                key={cellNumber}
                            ></section>
                            <Content
                                title={sectionMap[index as keyof typeof sectionMap]}
                                gridRef={mainRef}
                                selfRef={cellRef}
                                opened={currentRef == index}
                                onClick={()=>handleSelect(index)}
                            >asd</Content>
                        </>
                    )
                })}
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
    selfRef: React.RefObject<HTMLTableSectionElement>;
    gridRef: React.RefObject<HTMLMediaElement>;
    onClick: () => void;
}
function Content(props:SectionSketchProps) {
    return (
        <div
            className={`
                ${styles.inner_content}
                ${props.opened && styles.opened}
            `}
            style={
                props.opened ? {
                    top: 0,
                    left: 0,
                    width: props.gridRef.current?.offsetWidth,
                    height: props.gridRef.current?.offsetHeight,
                } : {
                    top: props.selfRef.current?.offsetTop,
                    left: props.selfRef.current?.offsetLeft,
                    width: props.selfRef.current?.offsetWidth,
                    height: props.selfRef.current?.offsetHeight,
                }
            }
        >
            <h2
                className={`
                    ${styles.section_title}
                    ${bigShouldersDisplay.className}
                    ${props.opened && styles.opened}
                `}
            >
                {props.title}
            </h2>
            <div className={`${styles.button_container} ${props.opened && styles.opened}`}>
                <Button
                    onClick={props.onClick}
                    variant="main_icon"
                >{props.opened ? <Minimize2 /> : <Maximize2 />}</Button>
            </div>
            {props.title}
        </div>
    )
}