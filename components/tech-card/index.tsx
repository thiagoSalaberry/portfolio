import styles from "./styles.module.css";
import { TechCardProps } from "@/lib/types";
import { inter } from "@/lib/fonts";

export function TechCard(props:TechCardProps) {
    switch (props.size) {
        case 'small':
            return <SmallCard {...props}/>
        case "large":
            return <LargeCard {...props}/>
    }
};

function SmallCard(props:TechCardProps) {
    return (
        <div className={`${styles.small_container} ${styles[props.title]}`}>
            <div className={styles.small_img_container}>
                <img src={props.img as string} alt={props.title} className={styles.small_img} />
            </div>
            <h3 className={styles.small_title}>{props.title}</h3>
        </div>
    )
}

function LargeCard(props:TechCardProps) {
    return (
        <div className={`${styles.container} ${styles[props.title]}`}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={`${styles.tag} ${inter.className}`}>{props.tag}</p>
            <p className={`${styles.description} ${inter.className}`}>{props.description}</p>
        </div>
    )
}