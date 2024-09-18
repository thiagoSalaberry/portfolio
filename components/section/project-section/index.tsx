import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Github } from "react-bootstrap-icons";
import { Navigation } from "@/ui";
import { motion } from "framer-motion";
import { Project } from "@/components/project";

export function ProjectsSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const [selected, setSelected] = useState<number | null>(1);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <div className={`${styles.projects_container} ${opened && styles.opened}`}>
            <p className={`${styles.desc} ${poppins.className} ${opened && styles.opened}`}>Estos son mis proyectos más destacados hasta la fecha, en los que se pueden apreciar mis conocimientos técnicos y mi enfoque de diseño y experiencia de usuario.</p>
            <div className={`${styles.projects_list} ${opened && styles.opened}`}>
                <Project
                    title="E-COMMERCE"
                    description="Un comercio electrónico para publicar productos y comprar a través de MercadoPago."
                    techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                    index={0}
                    language="es"
                    opened={opened}
                    selected={selected == 0}
                    notSelected={selected != null && selected != 0}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(0)}
                />
                <Project
                    title="URL SHORTENER"
                    description="Una web para recortar URLs largos y hacerlos más legibles y cómodos."
                    techs={["React.js", "Next.js", "TypeScript", "PostgreSQL"]}
                    index={1}
                    language="es"
                    opened={opened}
                    selected={selected == 1}
                    notSelected={selected != null && selected != 1}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(1)}
                />
                <Project
                    title="TEOXYS TATTOO"
                    description="Una web para facilitar la reservación de turnos de tatuajes."
                    techs={["React.js", "Next.js", "TypeScript", "Styled-Components"]}
                    index={2}
                    language="es"
                    opened={opened}
                    selected={selected == 2}
                    notSelected={selected != null && selected != 2}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(2)}
                />
                <Project
                    title="PIEDRA PAPEL Ó TIJERA"
                    description="Un piedra papel o tijera online para jugar con tus amigos en tiempo real."
                    techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                    index={3}
                    language="es"
                    opened={opened}
                    selected={selected == 3}
                    notSelected={selected != null && selected != 3}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(3)}
                />
            </div>
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