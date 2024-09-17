import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { useState } from "react";
import { ChevronDown, ExternalLink, Navigation } from "lucide-react";
import { Github } from "react-bootstrap-icons";

export function ProjectsSection({opened}: {opened:boolean}) {
    const [selected, setSelected] = useState<number | null>(null);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <div className={`${styles.projects_container} ${opened && styles.opened}`}>
            {opened ? (
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
            ) : (
                <div className={styles.projects_container}>
                    <h3 className={styles.projects_title}>E-COMMERCE</h3>
                    <h3 className={styles.projects_title}>URL SHORTENER</h3>
                    <h3 className={styles.projects_title}>TEOXYS TATTOO</h3>
                    <h3 className={styles.projects_title}>PIEDRA PAPEL O TIJERA</h3>
                </div>
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