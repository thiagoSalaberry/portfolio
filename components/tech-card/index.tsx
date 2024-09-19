import styles from "./styles.module.css";
import { TechCardProps } from "@/lib/types";
import { techsMap } from "@/lib/techsMap";

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
        <div className={`${styles.small_container}`}>
            <img
                style={{height: props.index == 15 ? "100%": "", width: props.index == 15 ? "auto" : ""}}
                src={`/${techsMap[props.index as keyof typeof techsMap].img}.png`}
                alt={`/${techsMap[props.index as keyof typeof techsMap].name}`}
                className={styles.small_img}
            />
            <b className={styles.small_title}>
                {techsMap[props.index as keyof typeof techsMap].name}
            </b>
        </div>
    )
}

function LargeCard(props:TechCardProps) {
    return (
        <div className={styles.large_container}>
            <h3 className={styles.title}>
                {techsMap[props.index as keyof typeof techsMap].name}
            </h3>
            <img
                src={`/${techsMap[props.index as keyof typeof techsMap].img}.png`}
                alt={`/${techsMap[props.index as keyof typeof techsMap].name}`}
                className={styles.large_img}    
            />
        </div>
    )
}