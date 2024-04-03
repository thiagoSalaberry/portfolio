import React, { useState } from "react";
import styles from "./boxes.module.css";
import { PlusCircle, CaretRight, TypeH3, UnlockFill } from "react-bootstrap-icons";
import Navigation from "@/ui/links";
import { projects } from "./projects";
export default function Boxes() {
    const [multiple, setMultiple] = useState<{
        [key: number]: boolean;
    }>({
        1:false,
        2: false,
        3: false,
        4: false,
    })
    const handleMultiple = (getCurrentId:number) => {
        setMultiple(prev => ({
            ...prev,
            [getCurrentId]: !multiple[getCurrentId]
        }))
    };
    const handleClick = () => {

    }
    return (
        <div className={styles["wrapper"]}>
            {/* <div className={styles["dropdown"]} onClick={()=>setDropped(!dropped)}>
                <h3 className={styles["projects"]}>Proyectos<span className={styles["projects-span"]}><PlusCircle size={25}/></span></h3>
                <div className={`${styles["item-desc"]} ${dropped ? styles["show-desc"] : ""}`}>
                    {projects && projects.map((projectItem, index) => {
                        return (
                            <div key={index}>{projectItem.title}<span className={styles["projects-span"]}><Navigation href="" icon="arrow" style="card"/><Navigation href="" icon="github" style="card"/></span></div>
                        )
                    })}
                </div>
                {projects && projects.map((projectItem, index) => {
                    return (
                        <div key={index} className={styles["item"]} onClick={()=>handleMultiple(projectItem.id)}>
                            <p className={`${styles["item-desc"]} ${multiple[projectItem.id] ? styles["show-desc"] : ""}`}>
                                {projectItem.description}
                            </p>
                        </div>
                    )
                })}
            </div> */}
            {/* <div className={styles["dropdown"]} onClick={()=>setDropped(!dropped)}>
                <h3 className={styles["projects"]}>TECNOLOGÍAS<span className={styles["projects-span"]}><PlusCircle size={25}/></span></h3>
                <div className={`${styles["item-desc"]} ${dropped ? styles["show-desc"] : ""}`}>
                    {projects && projects.map((projectItem, index) => {
                        return (
                            <div key={index}>{projectItem.title}<span className={styles["projects-span"]}><Navigation href="" icon="arrow" style="card"/><Navigation href="" icon="github" style="card"/></span></div>
                        )
                    })}
                </div>
                {projects && projects.map((projectItem, index) => {
                    return (
                        <div key={index} className={styles["item"]} onClick={()=>handleMultiple(projectItem.id)}>
                            <p className={`${styles["item-desc"]} ${multiple[projectItem.id] ? styles["show-desc"] : ""}`}>
                                {projectItem.description}
                            </p>
                        </div>
                    )
                })}
            </div> */}
            <ListItem title="TECNOLOGÍAS"></ListItem>
            <ListItem title="PROYECTOS" >
                {projects && projects.map((projectItem, index) => {
                    return (
                        <div key={index} className={styles["project-container"]}>
                            <p className={styles["project-title"]}>{projectItem.title}</p>
                            <div className={styles["project-links"]}>
                                <Navigation href="" icon="arrow" style="card"></Navigation>
                                <Navigation href="" icon="github" style="card"></Navigation>
                            </div>
                        </div>
                    )
                })}
            </ListItem>
            <ListItem title="SOBRE MÍ"></ListItem>
            <ListItem title="CONTACTO"></ListItem>
        </div>
    )
}
function ListItem({title, children}: {title:string, children?:React.ReactNode}) {
    const [dropped, setDropped] = useState(false);
    return (
        <div className={`${styles["list-item"]} ${children ? styles["clickable"] : ""}`}>
            {children ? <h3 onClick={()=>setDropped(!dropped)}>{title} <span className={`${styles["span"]} ${dropped ? styles["dropped"] : ""}`}><CaretRight size={25}/></span></h3> : <h3>{title}</h3>}
            {children ? (
                <div className={`${styles["item-desc"]} ${dropped ? styles["show-desc"] : ""}`}>
                    {children}
                </div>
            ) : null}
        </div>
    )
}