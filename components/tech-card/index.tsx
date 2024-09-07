import styles from "./styles.module.css";
import { TechCardProps } from "@/lib/types";
import { inter } from "@/lib/fonts";

export function TechCard(props:TechCardProps) {
    return (
        <div className={`${styles.container} ${styles[props.title]}`}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={`${styles.tag} ${inter.className}`}>{props.tag}</p>
            <p className={`${styles.description} ${inter.className}`}>{props.description}</p>
        </div>
    );
};