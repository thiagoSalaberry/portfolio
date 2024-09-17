import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { techsMap } from "@/lib/techsMap";
import { BookCheck, Hourglass, Network } from "lucide-react";

export function EducationSection({opened, concepts}: {opened:boolean, concepts: {title:string, desc:string}[]}) {
    return (
        <>
            {opened && (
                <div className={styles.education_container}>
                    <div className={`${styles.education} ${styles.in_progress}`}>
                        <h4 className={`${styles.education_title} ${poppins.className}`}>Tecnicatura en Programación <span><Hourglass color="var(--grey)" size={20}/></span></h4>
                        <p className={`${styles.education_lapse} ${poppins.className}`}>UTN | 2024 - presente</p>
                    </div>
                    <div className={`${styles.education} ${styles.completed}`}>
                        <h4 className={`${styles.education_title} ${poppins.className}`}>Fullstack Web Developer <BookCheck color="var(--green)" size={20}/></h4>
                        <p className={`${styles.education_lapse} ${poppins.className}`}>APX | 2022 - 2024</p>
                    </div>
                    <h3 className={bigShouldersDisplay.className}>CONOCIMIENTOS</h3>
                    <div className={styles.concepts_list_wrapper}>
                        <ul className={styles.concepts_list}>
                            {concepts.map((concept:any, index) => {
                                return (
                                    <Concept key={concept.title} title={concept.title} desc={concept.desc} index={index + 1} total={concepts.length}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
type ConceptProps = {
    title: string;
    desc: string;
    index: number;
    total: number
}
function Concept(props:ConceptProps) {
    return (
            <li className={styles.concept_container}>
                <b className={`${styles.concept_title} ${poppins.className}`}><Network size={24}/>{props.title}</b>
                <p className={`${styles.concept_desc} ${poppins.className}`}>{props.desc}</p>
            </li>
    )
}