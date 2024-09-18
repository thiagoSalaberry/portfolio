import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Github } from "react-bootstrap-icons";
import { Navigation } from "@/ui";
import { motion } from "framer-motion";

export function ProjectsSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const [selected, setSelected] = useState<number | null>(1);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <div className={`${styles.projects_container} ${opened && styles.opened}`}>
            {opened ? (
                <>
                    <ProjectCard
                        index={0}
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
                        index={1}
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
                        index={2}
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
                        index={3}
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
            ) : (
                <div className={`${styles.projects_container} ${poppins.className}`}>
                    <p className={styles.projects_desc}>Estos son mis proyectos más destacados hasta la fecha, en los que se pueden apreciar mis conocimientos técnicos
                        y mi enfoque de diseño y experiencia de usuario.
                    </p>
                </div>
            )}
        </div>
    )
};
type ProjectCardProp = {
    index:number;
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
    const imageMap = {
        0: "ecommerce.png",
        1: "urlshortener.png",
        2: "teoxys-tattoo.png",
        3: "ppt.png"
    }
    return (
        <div className={`${styles.project_card} ${props.selected && styles.selected} ${props.notSelected && styles.not_selected}`}>
            <button onClick={props.onSelect} className={styles.dropdown_button}>
                <h3 className={`${styles.dropdown_title} ${bigShouldersDisplay.className}`}>{props.title}</h3>
                <span className={`${styles.chevron} ${props.selected && styles.opened}`}>
                    <ChevronDown size={20}/>
                </span>
            </button>
            {!props.notSelected && !props.selected && <p className={`${styles.desc} ${poppins.className}`}>{props.desc}</p>}
            {props.selected && (
                <div className={`${styles.card_content}`}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className={styles.img_container}>
                        <img className={styles[props.title.replaceAll(" ", "_")]} src={imageMap[props.index as keyof typeof imageMap]} alt={imageMap[props.index as keyof typeof imageMap]} />
                    </motion.div>
                    <p className={`${styles.desc} ${poppins.className}`}>{props.desc}</p>
                    <ul className={styles.techs_list}>
                        {props.techs.map(tech => {
                            return <li key={tech.toString()} className={`${styles.tech} ${poppins.className}`}>{tech}</li>
                        })}
                    </ul>
                    <div className={styles.links_container}>
                        <Navigation href={props.link}><ExternalLink size={20}/> Ver</Navigation>
                        <Navigation href={props.github}><Github size={20}/> GitHub</Navigation>
                    </div>
                </div>
            )}
        </div>
    )
}