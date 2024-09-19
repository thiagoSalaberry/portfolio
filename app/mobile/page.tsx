"use client"
import { Linkedin, Maximize2, Minimize2 } from "lucide-react";
import styles from "./styles.module.css";
import { Github } from "react-bootstrap-icons";
import React, { useEffect, useRef, useState } from "react";
import { bigShouldersDisplay, inter } from "@/lib/fonts";
import { Button } from "@/ui";
import translation from "@/lib/translation.json";

import { AboutMeSection } from "@/components/section/about-me-section";
import { ProjectsSection } from "@/components/section/project-section";
import { TechSection } from "@/components/section/tech-section";
import { EducationSection } from "@/components/section/education-section";
import { ContactSection } from "@/components/section/contact-section";
import { useRecoilValue } from "recoil";
import { languageAtom } from "@/lib/atoms";

const concepts = translation.es.techs_section.key_concepts.list;

export default function Page() {
    const language = useRecoilValue(languageAtom)
    const mainRef = useRef<HTMLMediaElement>(null);
    const [cellStyles, setCellStyles] = useState<{
        left:number,
        top:number,
        width:number,
        height:number,
    }[]>([])
    const refs = [
    useRef<HTMLTableSectionElement>(null),
    useRef<HTMLTableSectionElement>(null),
    useRef<HTMLTableSectionElement>(null),
    useRef<HTMLTableSectionElement>(null),
    useRef<HTMLTableSectionElement>(null),
    ]
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
        0: {
            title: "SOBRE MÍ",
            content: <AboutMeSection opened={currentRef == 0} language={language}/>
        },
        1: {
            title: "PROYECTOS",
            content: <ProjectsSection opened={currentRef == 1} language={language}/>
        },
        2: {
            title: "TECNOLOGÍAS",
            content: <TechSection opened={currentRef == 2}  language={language}/>
        },
        3: {
            title: "EDUCACIÓN",
            content: <EducationSection opened={currentRef == 3} language={language}/>
        },
        4: {
            title: "CONTACTO",
            content: <ContactSection opened={currentRef == 4} language={language}/>
        },
    };
    return (
        <div className={styles.page}>
            <Header/>
            {/* <Navbar/> */}
            <main ref={mainRef} className={styles.grid}>
                {refs.map((cell, index) => {
                    const cellNumber = `cell_${index + 1}`;
                    return (
                        <Section
                            key={cellNumber}
                            index={index}
                            gridRef={mainRef}
                            selfRef={cell}
                            onClick={()=>handleSelect(index)}
                            opened={currentRef == index}
                            unselected={currentRef !== null && currentRef !== index}
                            title={sectionMap[index as keyof typeof sectionMap].title}
                        >
                            {sectionMap[index as keyof typeof sectionMap].content}
                        </Section>
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

type SectionSketchProps = {
    index:number;
    title: string;
    children: React.ReactNode;
    opened:boolean;
    unselected:boolean;
    selfRef: React.RefObject<HTMLTableSectionElement>;
    gridRef: React.RefObject<HTMLMediaElement>;
    onClick: () => void;
}

function Section(props:SectionSketchProps) {
    const cellNumber = `cell_${props.index + 1}`;
    return (
        <>
            <section
                ref={props.selfRef}
                className={`${styles.cell} ${styles[cellNumber]}`}
            ></section>
            <div
                className={`
                    ${styles.inner_content}
                    ${styles[props.title.replaceAll(" ", "_")]}
                    ${props.opened && styles.opened}
                    ${props.unselected && styles.unselected}
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
                        height: props.selfRef.current?.offsetHeight
                    }
                }
            >
                <div className={styles.inner_content_header}>
                    <h2
                        className={`
                            ${styles.section_title}
                            ${styles[props.title.replaceAll(" ", "_")]}
                            ${bigShouldersDisplay.className}
                        `}
                    >
                        {props.title}
                    </h2>
                    <div className={`${styles.button_container} ${props.opened && styles.opened}`}>
                        <Button
                            onClick={props.onClick}
                            variant="main_icon"
                        >{props.opened ? <Minimize2 size={20}/> : <Maximize2 size={20}/>}</Button>
                    </div>
                </div>
                {!props.unselected && props.children}
            </div>
        </>
    )
};

