import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { BookCheck, BrickWall, DatabaseZap, Hourglass, Network, Rocket } from "lucide-react";
import translation from "@/lib/translation.json"

export function EducationSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    return (
        <div className={`${styles.education_container} ${opened && styles.opened}`}>
            {opened ? (
                <>
                    <div className={`${styles.education} ${styles.in_progress}`}>
                        <h4 className={`${styles.education_title} ${poppins.className}`}>{translation[language].education_section.list[1].title} <span><Hourglass color="var(--grey)" size={20}/></span></h4>
                        <p className={`${styles.education_lapse} ${poppins.className}`}>{translation[language].education_section.list[1].lapse}</p>
                    </div>
                    <div className={`${styles.education} ${styles.completed}`}>
                        <h4 className={`${styles.education_title} ${poppins.className}`}>Fullstack Web Developer <BookCheck color="var(--green)" size={20}/></h4>
                        <p className={`${styles.education_lapse} ${poppins.className}`}>APX | 2022 - 2024</p>
                    </div>
                    <h3 className={bigShouldersDisplay.className}>{translation[language].techs_section.key_concepts.subtitle}</h3>
                    <div className={styles.concepts_list_wrapper}>
                        <ul className={styles.concepts_list}>
                            {translation[language].techs_section.key_concepts.list.map((concept, index) => {
                                return (
                                    <Concept key={concept.title} title={concept.title} desc={concept.desc} index={index + 1} total={0}/>
                                )
                            })}
                        </ul>
                    </div>
                </>
            ) : (
                <div className={styles.education_title_wrapper}>
                    <div className={styles.education_title_slider}>
                        <div className={styles.education}>
                            <h4 className={`${styles.education_title} ${poppins.className} ${styles.opened}`}>Fullstack Web Developer <BookCheck color="var(--green)" size={20}/></h4>
                            <p className={`${styles.education_lapse} ${poppins.className}`}>APX | 2022 - 2024</p>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.education}>
                            <h4 className={`${styles.education_title} ${poppins.className} ${styles.opened}`}>{translation[language].education_section.list[1].title} <span><Hourglass color="var(--grey)" size={20}/></span></h4>
                            <p className={`${styles.education_lapse} ${poppins.className}`}>{translation[language].education_section.list[1].lapse}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
type ConceptProps = {
    title: string;
    desc: string;
    index: number;
    total: number
}
function Concept(props:ConceptProps) {
    const iconsMap = {
        0: <Network size={24}/>,
        1: <BrickWall size={24}/>,
        2: <DatabaseZap size={24}/>,
        3: <Rocket size={24}/>,
    }
    return (
            <li className={styles.concept_container}>
                <b className={`${styles.concept_title} ${poppins.className}`}>{iconsMap[props.index - 1 as keyof typeof iconsMap]} {props.title}</b>
                <p className={`${styles.concept_desc} ${poppins.className}`}>{props.desc}</p>
            </li>
    )
}