import { poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { techsMap } from "@/lib/techsMap";

export function TechSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    return (
        <div className={`${styles.techs_container} ${opened && styles.opened}`}>
            {opened ? (
                <>
                    {Object.values(techsMap).map((tech, index) => {
                        return <Tech key={index} img={tech.img} title={tech.name}/>
                    })}
                </>
            ) : (
                <p className={poppins.className}>Repertorio de las tecnologías que domino</p>
            )}
        </div>
    )
};
                        
function Tech({title, img}: {title:string, img:string}) {
    return (
        <div className={styles.tech_container}>
            <div className={styles.tech_img_container}>
                <img src={`/${img}.png`} alt={title} className={styles.tech_img} />
            </div>
            <b className={styles.tech_title}>{title}</b>
        </div>
    )
}