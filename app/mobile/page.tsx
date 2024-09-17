"use client"
import { Book, BookCheck, ChevronDown, ChevronRight, Coffee, Download, ExternalLink, Hourglass, Linkedin, MapPin, Maximize2, Minimize2, Network } from "lucide-react";
import styles from "./styles.module.css";
import { Github } from "react-bootstrap-icons";
import React, { useEffect, useRef, useState } from "react";
import { bigShouldersDisplay, poppins, inter } from "@/lib/fonts";
import { Button, Input, Navigation, Textarea } from "@/ui";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactForm } from "@/components";
import arrow from "@/public/arrow-1.svg"
import translation from "@/lib/translation.json";
import { techsMap } from "@/lib/techsMap";

const concepts = translation.es.techs_section.key_concepts.list;

export default function Page() {
    const mainRef = useRef<HTMLMediaElement>(null);
    const [cellStyles, setCellStyles] = useState<{
        left:number,
        top:number,
        width:number,
        height:number,
      }[]>([])

    // const refs:React.RefObject<HTMLTableSectionElement>[] = [...Array(5)].map(_ => useRef<HTMLTableSectionElement>(null))
    const refs = [...Array(5)].map(_ => React.createRef<HTMLTableSectionElement>())
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
            content: <AboutMe opened={currentRef == 0} unselected={currentRef != null && currentRef != 0}/>
        },
        1: {
            title: "PROYECTOS",
            content: <Projects opened={currentRef == 1} unselected={currentRef != null && currentRef != 1}/>
        },
        2: {
            title: "TECNOLOGÍAS",
            content: <Techs opened={currentRef == 2} unselected={currentRef != null && currentRef != 2}/>
        },
        3: {
            title: "EDUCACIÓN",
            content: <Education concepts={concepts} opened={currentRef == 3} unselected={currentRef != null && currentRef != 3}/>
        },
        4: {
            title: "CONTACTO",
            content: <Contact opened={currentRef == 4} unselected={currentRef != null && currentRef != 4}/>
        },
    }
    return (
        <div className={styles.page}>
            <Header/>
            {/* <Navbar/> */}
            <main ref={mainRef} className={styles.grid}>
                {[...Array(5)].map((cell, index) => {
                    const cellNumber = `cell_${index + 1}`;
                    return (
                        <Section
                            key={cellNumber}
                            index={index}
                            gridRef={mainRef}
                            selfRef={refs[index]}
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



// function Navbar() {
//     const [selected, setSelected] = useState<number | null>(null);
//     const handleSelect = (index:number):void => {
//         setSelected(prev => prev == index ? null : index);
//     }
//     return (
//         <nav className={styles.navbar}>
//             <ul className={styles.navbar_list}>
//                 <li onClick={()=>handleSelect(0)} className={`${styles.navbar_item} ${selected == 0 && styles.selected}`}>
//                     SOBRE MÍ
//                 </li>
//                 <li onClick={()=>handleSelect(1)} className={`${styles.navbar_item} ${selected == 1 && styles.selected}`}>
//                     PROYECTOS
//                 </li>
//                 <li onClick={()=>handleSelect(2)} className={`${styles.navbar_item} ${selected == 2 && styles.selected}`}>
//                     TECNOLOGÍAS
//                 </li>
//                 <li onClick={()=>handleSelect(3)} className={`${styles.navbar_item} ${selected == 3 && styles.selected}`}>
//                     EDUCACIÓN
//                 </li>
//                 <li onClick={()=>handleSelect(4)} className={`${styles.navbar_item} ${selected == 4 && styles.selected}`}>
//                     CONTACTO
//                 </li>
//             </ul>
//         </nav>
//     )
// }



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
        <div
            className={`
                ${styles.inner_content}
                ${props.opened && styles.opened}
                ${styles[cellNumber]}
                ${props.unselected && styles.unselected}
            `}
        >
            <div className={styles.inner_content_header}>
                <h2
                    className={`
                        ${styles.section_title}
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
    )
};



function AboutMe({opened, unselected}: {opened:boolean, unselected:boolean}) {
    return (
        <>
            {opened && (
                <div className={`${styles.about_me_container} ${poppins.className}`}>
                    <div className={styles.name_container}>
                        <h2 className={`${styles.name} ${bigShouldersDisplay.className}`}>THIAGO SALABERRY</h2>
                    </div>
                    <div className={styles.list_container}>
                        <ul className={styles.about_me_list}>
                        <li className={styles.about_me_item}>
                                <MapPin size={18}/> Buenos Aires, <img className={styles.arg} src="/argentina.gif" alt="argentina" />
                            </li>
                            <li className={styles.about_me_item}>
                                <Coffee size={18}/> {translation["es"].about_me_section.list[0]}
                            </li>
                            <li className={styles.about_me_item}>
                                <Book size={18}/> {translation["es"].about_me_section.list[1]}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.about_me_desc_container}>
                        <p className={styles.about_me_desc}>
                            {translation["es"].about_me_section.desc.split("&").map((text, index) => {
                                if(index != 1 && index != 3) return text
                                return <b key={text}>{text}</b>
                            })}
                        </p>
                    </div>
                    <div className={styles.about_me_img_container}>
                        <div className={styles.img_container}>
                            {/* <img src="man_3.jpg" alt="" /> */}
                        </div>
                    </div>
                    <div className={styles.about_me_button_container}>
                        <Button variant="secondaryIcon" onClick={()=>{}}>CV <Download size={20}/></Button>
                    </div>
                </div>
            )}
        </>
    )
}



function Projects({opened, unselected}: {opened:boolean, unselected:boolean}) {
    const [selected, setSelected] = useState<number | null>(null);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <div className={styles.projects_container}>
            {opened && (
                <>
                    <ProjectCard
                        selected={selected == 0}
                        notSelected={selected != null && selected != 0}
                        onSelect={()=>handleSelect(0)}
                        title="E-COMMERCE"
                        desc="Un comercio electrónico para publicar productos y comprar a través de MercadoPago."
                        techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                        link=""
                        github=""
                    />
                    <ProjectCard
                        selected={selected == 1}
                        notSelected={selected != null && selected != 1}
                        onSelect={()=>handleSelect(1)}
                        title="URL SHORTENER"
                        desc="Una web para recortar URLs largos y hacerlos más legibles y cómodos."
                        techs={["React.js", "Next.js", "TypeScript", "PostgreSQL"]}
                        link=""
                        github=""
                    />
                    <ProjectCard
                        selected={selected == 2}
                        notSelected={selected != null && selected != 2}
                        onSelect={()=>handleSelect(2)}
                        title="TEOXYS TATTOO"
                        desc="Una web para facilitar la reservación de turnos de tatuajes."
                        techs={["React.js", "Next.js", "TypeScript", "Styled Components"]}
                        link=""
                        github=""
                    />
                    <ProjectCard
                        selected={selected == 3}
                        notSelected={selected != null && selected != 3}
                        onSelect={()=>handleSelect(3)}
                        title="PIEDRA PAPEL Ó TIJERA"
                        desc="Un piedra papel o tijera online para jugar con tus amigos en tiempo real."
                        techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                        link=""
                        github=""
                    />
                </>
            )}
        </div>
    )
};
type ProjectCardProp = {
    title:string;
    desc:string;
    techs:string[];
    link:string;
    github:string;
    selected:boolean;
    notSelected: boolean;
    onSelect:()=>void;
}
function ProjectCard(props:ProjectCardProp) {
    return (
        <div className={`${styles.project_card} ${props.selected && styles.selected} ${props.notSelected && styles.not_selected}`}>
            <button onClick={props.onSelect} className={styles.dropdown_button}>
                <h3 className={`${styles.dropdown_title} ${bigShouldersDisplay.className}`}>{props.title}</h3>
                <span className={`${styles.chevron} ${props.selected && styles.opened}`}>
                    <ChevronDown size={20}/>
                </span>
            </button>
            {props.selected && (
                <div className={`${styles.card_content}`}>
                    <p className={`${styles.desc} ${poppins.className}`}>{props.desc}</p>
                    <ul className={styles.techs_list}>
                        {props.techs.map(tech => {
                            return <li key={tech.toString()} className={`${styles.tech} ${poppins.className}`}>{tech}</li>
                        })}
                    </ul>
                    <div className={styles.links_container}>
                        <Navigation href=""><ExternalLink size={20}/> Ver</Navigation>
                        <Navigation href=""><Github size={20}/> GitHub</Navigation>
                    </div>
                </div>
            )}
        </div>
    )
}



function Techs({opened, unselected}: {opened:boolean, unselected:boolean}) {
    return (
        <>
            {opened && (
                <div className={styles.techs_wrapper}>
                    <div className={styles.techs_container}>
                        {Object.values(techsMap).map((tech, index) => {
                            return <Tech img={tech.img} title={tech.name}/>
                        })}
                    </div>
                </div>
            )}
        </>
    )
}
function Tech({title, img}: {title:string, img:string}) {
    return (
        <div className={styles.tech_container}>
            <div className={styles.tech_img_container}>
                <img src={`/${img}.png`} alt={title} className={styles.tech_img} />
            </div>
            <b className={styles.tech_title}>{title}</b>
        </div>
    )
}


function Education({opened, unselected, concepts}: {opened:boolean, unselected:boolean, concepts: {title:string, desc:string}[]}) {
    return (
        <>
            {opened && (
                <div className={styles.education_container}>
                    <div className={`${styles.education} ${styles.in_progress}`}>
                        <h4 className={`${styles.education_title} ${poppins.className}`}>Tecnicatura en Programación <span><Hourglass color="var(--grey)" size={20}/></span></h4>
                        <p className={`${styles.education_lapse} ${poppins.className}`}>UTN | 2024 - presente</p>
                    </div>
                    <div className={`${styles.education} ${styles.completed}`}>
                        <h4 className={`${styles.education_title} ${poppins.className}`}>Fullstack Web Developer <BookCheck color="var(--green)" size={20}/></h4>
                        <p className={`${styles.education_lapse} ${poppins.className}`}>APX | 2022 - 2024</p>
                    </div>
                    <h3 className={bigShouldersDisplay.className}>CONOCIMIENTOS <svg width="auto" height="16" viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M199.705 8.46814C200.096 8.07863 200.098 7.44547 199.708 7.05393L193.361 0.673419C192.971 0.281879 192.338 0.28023 191.947 0.669736C191.555 1.05924 191.554 1.69241 191.943 2.08395L197.585 7.75551L191.914 13.3976C191.522 13.7871 191.52 14.4203 191.91 14.8118C192.299 15.2034 192.933 15.205 193.324 14.8155L199.705 8.46814ZM-0.00260416 8.24096L198.997 8.75919L199.002 6.7592L0.00260416 6.24097L-0.00260416 8.24096Z" fill="black"/>
                    </svg>
                    </h3>
                    <div className={styles.concepts_wrapper}>
                        <ul className={styles.concepts_list}>
                            {concepts.map((concept:any, index) => {
                                return (
                                    <Concept key={concept.title} title={concept.title} desc={concept.desc} index={index + 1} total={concepts.length}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
type ConceptProps = {
    title: string;
    desc: string;
    index: number;
    total: number
}
function Concept(props:ConceptProps) {
    return (
            <li className={styles.concept_container}>
                <b className={`${styles.concept_title} ${poppins.className}`}><Network size={24}/>{props.title}</b>
                <p className={`${styles.concept_desc} ${poppins.className}`}>{props.desc}</p>
                <b className={styles.current_concept}>{props.index}/{props.total}</b>
            </li>
    )
}



function Contact({opened, unselected}: {opened:boolean, unselected:boolean}) {
    return (
        <>
            {opened && (
                <div className={styles.contact_container}>
                    <p className={`${styles.contact_desc} ${poppins.className}`}>Completá el formulario o enviame un mail a la siguiente dirección</p>
                    <b className={`${styles.mail} ${poppins.className}`}>thiagosalaberry99@gmail.com</b>
                    <ContactForm language="es"/>
                </div>
            )}
        </>
    )
}