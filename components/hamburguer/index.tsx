import { useState } from "react";
import styles from "./hamburguer.module.css";
import Logo from "../logo";
import Navigation from "@/ui/links";
import { X, CaretRight } from "react-bootstrap-icons";
import { projects } from "./projects";
import Router from "next/router";
export default function  Hamburguer() {
    const [hovered, setHovered] = useState(false);
    const [opened, setOpened] = useState(false);
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
                    <ListItem title="TECNOLOGÍAS"></ListItem>
                    <ListItem title="PROYECTOS">
                        {projects && projects.map((projectItem, index) => {
                            return (
                                <div key={index} className={styles["project-container"]}>
                                    <p className={styles["project-title"]}>{projectItem.title}</p>
                                    <div className={styles["project-links"]}>
                                        <Navigation href={projectItem.pageUrl} icon="arrow" style="card"></Navigation>
                                        <Navigation href={projectItem.githubUrl} icon="github" style="card"></Navigation>
                                    </div>
                                </div>
                            )
                        })}
                    </ListItem>
                    <ListItem title="SOBRE MÍ"></ListItem>
                    <ListItem title="CONTACTO"></ListItem>
                </ul>
            </div>
        </div>
    )
};
function ListItem({title, children}: {title:string, children?:React.ReactNode}) {
    const [dropped, setDropped] = useState(false);
    return (
        <div className={`${styles["list-item"]}`}>
            {children ? <h3 className={styles["item-title"]} onClick={()=>setDropped(!dropped)}>{title} <span className={`${styles["span"]} ${dropped ? styles["dropped"] : ""}`}><CaretRight size={25}/></span></h3> : <h3 className={styles["item-title"]}>{title}</h3>}
            {children ? (
                <div className={`${styles["item-desc"]} ${dropped ? styles["show-desc"] : ""}`}>
                    {children}
                </div>
            ) : null}
        </div>
    )
}