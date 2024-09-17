import styles from "./styles.module.css";
import { techsMap } from "@/lib/techsMap";

export function TechSection({opened}: {opened:boolean}) {
    return (
        <>
            {opened && (
                <div className={styles.techs_container}>
                    {Object.values(techsMap).map((tech, index) => {
                        return <Tech img={tech.img} title={tech.name}/>
                    })}
                </div>
            )}
        </>
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