import { useState } from "react";
import styles from "./hamburguer.module.css";
import Logo from "../logo";
import Navigation from "@/ui/links";
import { X, CaretRight } from "react-bootstrap-icons";
import { projects } from "./projects";
import Router from "next/router";
import translation from "@/lib/translation.json";
import { languajeState } from "@/atoms/languageState";
import { useRecoilValue } from "recoil";
export default function  Hamburguer() {
    const [hovered, setHovered] = useState(false);
    const [opened, setOpened] = useState(false);
    const language = useRecoilValue(languajeState);

    return (
        <div className={styles["hamburguer"]}>
            <button 
                className={`${styles["hamburguer__container"]} ${hovered ? styles["hovered"]: ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=>setOpened(true)}
            >
                <div className={`${styles["hamburguer__bar"]} ${hovered ? styles["hovered"]: ""}`}></div>
                <div className={`${styles["hamburguer__bar"]} ${hovered ? styles["hovered"]: ""}`}></div>
                <div className={`${styles["hamburguer__bar"]} ${hovered ? styles["hovered"]: ""}`}></div>
            </button>
            <div className={`${styles["hamburguer__menu"]} ${!opened ? styles["closed"]: ""}`}>
                <div className={styles["hamburguer__menu-header"]}>
                    <Logo/>
                    <button 
                        className={`${styles["close__menu-button"]}`}
                        onClick={()=>setOpened(false)}
                        >
                        <X size={50}/>
                    </button>
                </div>
                <div className={styles["menu__me-container"]}>
                    <div className={styles["menu__me-img__container"]}>
                        <img src="yo1.png" alt="me.png" className={styles["menu__me-img"]}/>
                    </div>
                    <p className={styles["menu__me-title"]}>Thiago Salaberry</p>
                    <p className={styles["menu__me-email"]}>thiagosalaberry99@gmail.com</p>
                </div>
                <ul className={styles["menu__list"]}>
                    <ListItem onClick={()=>setOpened(false)} title={translation[language].techs_section.title}></ListItem>
                    <ListItem title={translation[language].projects_section.title}>
                        <div className={styles["project-container"]}>
                            <p className={styles["project-title"]}>{translation[language].projects_section[1].title}</p>
                            <div className={styles["project-links"]}>
                                <Navigation href="https://frontend-seven-blond.vercel.app/" icon="arrow" style="card"></Navigation>
                                <Navigation href="https://github.com/thiagoSalaberry/frontend" icon="github" style="card"></Navigation>
                            </div>
                        </div>
                        <div className={styles["project-container"]}>
                            <p className={styles["project-title"]}>{translation[language].projects_section[2].title}</p>
                            <div className={styles["project-links"]}>
                                <Navigation href="https://landing-page-zeta-mauve.vercel.app/" icon="arrow" style="card"></Navigation>
                                <Navigation href="https://github.com/thiagoSalaberry/landing-page" icon="github" style="card"></Navigation>
                            </div>
                        </div>
                        <div className={styles["project-container"]}>
                            <p className={styles["project-title"]}>{translation[language].projects_section[3].title}</p>
                            <div className={styles["project-links"]}>
                                <Navigation href="https://ppt-online-react.vercel.app/"    icon="arrow" style="card"></Navigation>
                                <Navigation href="https://github.com/thiagoSalaberry/ppt-online" icon="github" style="card"></Navigation>
                            </div>
                        </div>
                        <div className={styles["project-container"]}>
                            <p className={styles["project-title"]}>{translation[language].projects_section[4].title}</p>
                            <div className={styles["project-links"]}>
                                <Navigation href="" icon="arrow" style="card"></Navigation>
                                <Navigation href="" icon="github" style="card"></Navigation>
                            </div>
                        </div>
                    </ListItem>
                    <ListItem onClick={()=>setOpened(false)} title={translation[language].about_me_section.title}></ListItem>
                    <ListItem onClick={()=>setOpened(false)} title={translation[language].contact_section.title}></ListItem>
                </ul>
            </div>
        </div>
    )
};
function ListItem({title, children, onClick}: {title:string, children?:React.ReactNode, onClick?:()=>void}) {
    const [dropped, setDropped] = useState(false);
    const scrollToSection = (section:string) => {
        let destiny:string = ""
        if(section.toLowerCase() == "tecnologías" || section.toLowerCase() == "techs") {
            destiny = "techs"
        } else if(section.toLowerCase() == "sobre mí" || section.toLowerCase() == "about me") {
            destiny = "about__me"
        } else if(section.toLowerCase() == "contacto" || section.toLowerCase() == "contact") {
            destiny = "contact"
        }
        const sectionEl = document.getElementById(destiny);
        if (!sectionEl) return;
        sectionEl.scrollIntoView({ behavior: 'smooth' });
        onClick && onClick();
    };
    return (
        <div className={`${styles["list-item"]}`}>
            {children ? 
                <h3 
                    className={styles["item-title"]}
                    onClick={()=>setDropped(!dropped)}
                >{title} <span className={`${styles["span"]} ${dropped ? styles["dropped"] : ""}`}><CaretRight size={25}/></span></h3>
                :
                <h3 
                    className={styles["item-title"]}
                    onClick={()=>scrollToSection(title)}
                >{title}</h3>}
            {children ? (
                <div className={`${styles["item-desc"]} ${dropped ? styles["show-desc"] : ""}`}>
                    {children}
                </div>
            ) : null}
        </div>
    )
}