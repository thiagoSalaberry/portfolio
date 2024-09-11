import styles from "./styles.module.css";
import { ProjectProps } from "@/lib/types";
import { Navigation } from "@/ui";
import { Github } from "react-bootstrap-icons";
import { ArrowUpCircle } from "lucide-react";
import { bigShouldersDisplay, inter, poppins } from "@/lib/fonts";
import { useState } from "react";

export function Project(props:ProjectProps) {
    const [hovering, setHovering] = useState<boolean>(false);
    return (
        <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className={styles.wrapper} style={{borderRight: props.index !== 3 ? "1px solid var(--grey)" : ""}}>
            <div className={`${styles.project_container} ${hovering && styles.hovering} ${styles[props.title.replaceAll(" ", "_")]}`}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>{props.title}</h2>
                </div>
                <p className={`${styles.desc} ${poppins.className}`}>{props.description}</p>
                <div className={styles.techs_container}>
                    {props.techs.map(tech => {
                        return (
                            <div key={tech} className={styles.tech_container}>
                                <img className={styles.tech} src={`/${tech}.png`} alt={`${tech}`} />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.links_container}>
                    <Navigation style={{rotate: "45deg"}} href={props.link}><ArrowUpCircle size={30}/></Navigation>
                    <Navigation href={props.githubLink}><Github size={30}/></Navigation>
                </div>
            </div>
        </div>
    );
};
                        