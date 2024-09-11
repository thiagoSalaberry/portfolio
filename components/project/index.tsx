import styles from "./styles.module.css";
import { ProjectProps } from "@/lib/types";
import { Navigation } from "@/ui";
import { Github } from "react-bootstrap-icons";
import { ArrowUpCircle, ExternalLink } from "lucide-react";
import { bigShouldersDisplay, inter, poppins } from "@/lib/fonts";
import { useState } from "react";

export function Project(props:ProjectProps) {
    const imageMap = {
        0: "ecommerce.png",
        1: "urlshortener.png",
        2: "teoxys-tattoo.png",
        3: "ppt.png"
    }
    const [hovering, setHovering] = useState<boolean>(false);
    return (
        <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className={styles.wrapper} style={{borderRight: props.index !== 3 ? "1px solid var(--grey)" : ""}}>
            <div className={`${styles.project_container} ${props.opened && styles.opened} ${hovering && styles.hovering} ${styles[props.title.replaceAll(" ", "_")]}`}>
                <div className={`${styles.project_img_container} ${props.opened && styles.opened}`}>
                    <img className={styles[props.title.replaceAll(" ", "_")]} src={imageMap[props.index as keyof typeof imageMap]} alt={imageMap[props.index as keyof typeof imageMap]} />
                </div>
                <div className={styles.content}>
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>{props.title}</h2>
                    </div>
                    <p className={`${styles.desc} ${poppins.className}`}>{props.description}</p>
                    <div className={styles.techs_container}>
                        {props.techs.map(tech => {
                            return (
                                <p key={tech} className={`${styles.tech} ${poppins.className}`}>{tech}</p>
                            )
                        })}
                    </div>
                    <div className={styles.links_container}>
                        <Navigation href={props.link}><ExternalLink size={30}/> Ver</Navigation>
                        <Navigation href={props.githubLink}><Github size={30}/> GitHub</Navigation>
                    </div>
                </div>
            </div>
        </div>
    );
};
                        