import styles from "./styles.module.css";
import { ProjectProps } from "@/lib/types";
import { Navigation } from "@/ui";
import { Github } from "react-bootstrap-icons";
import { ChevronDown, ExternalLink } from "lucide-react";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import { useRef } from "react";
import {motion} from "framer-motion";
export function Project(props:ProjectProps) {
    return (
        <>
            <Desktop {...props}/>
            <Mobile {...props}/>
        </>
    );
};

function Desktop(props:ProjectProps) {
    const imageMap = {
        0: "/ecommerce.png",
        1: "/urlshortener.png",
        2: "/teoxys-tattoo.png",
        3: "/ppt.png"
    };
    const imageContainerRef = useRef<HTMLDivElement>(null);
    return (
            <div className={`${styles.wrapper} ${styles.desktop}`} style={{borderRight: props.index !== 3 ? "1px solid var(--grey)" : ""}}>
                <div className={`${styles.project_container} ${props.opened && styles.opened} ${styles[props.title.replaceAll(" ", "_").replace("&", "Ó")]}`}>
                    <div ref={imageContainerRef} className={`${styles.project_img_container} ${props.opened && styles.opened}`}>
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
                            <Navigation href={props.link}><ExternalLink size={30}/> {props.language == "es" ? "Ver" : "View"}</Navigation>
                            <Navigation href={props.githubLink}><Github size={30}/> GitHub</Navigation>
                        </div>
                    </div>
                </div>
            </div>
    )
}
function Mobile(props:ProjectProps) {
    const imageMap = {
        0: "/ecommerce.png",
        1: "/urlshortener.png",
        2: "/teoxys-tattoo.png",
        3: "/ppt.png"
    }
    return (
        <div className={`${styles.project_card} ${styles.mobile} ${props.selected && styles.selected} ${props.notSelected && styles.not_selected}`}>
            <button onClick={props.onSelect} className={styles.dropdown_button}>
                <h3 className={`${styles.dropdown_title} ${bigShouldersDisplay.className}`}>{props.title}</h3>
                <span className={`${styles.chevron} ${props.selected && styles.opened}`}>
                    <ChevronDown size={20}/>
                </span>
            </button>
            {!props.notSelected && !props.selected && <p className={`${styles.desc} ${poppins.className}`}>{props.description}</p>}
            {props.selected && (
                <div className={`${styles.card_content}`}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className={styles.img_container}>
                        <img className={`${styles.img} ${styles[props.title.replaceAll(" ", "_")]}`} src={imageMap[props.index as keyof typeof imageMap]} alt={imageMap[props.index as keyof typeof imageMap]} />
                    </motion.div>
                    <p className={`${styles.desc} ${poppins.className}`}>{props.description}</p>
                    <ul className={styles.techs_list}>
                        {props.techs.map(tech => {
                            return <li key={tech.toString()} className={`${styles.tech} ${poppins.className}`}>{tech}</li>
                        })}
                    </ul>
                    <div className={styles.links_container}>
                        <Navigation href={props.link}><ExternalLink size={20}/> {props.language == "es" ? "Ver" : "View"}</Navigation>
                        <Navigation href={props.githubLink}><Github size={20}/> GitHub</Navigation>
                    </div>
                </div>
            )}
        </div>
    )
}