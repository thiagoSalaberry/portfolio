import styles from "./styles.module.css";
import { NavigationProps } from "@/lib/types";
import Link from "next/link";

export function Navigation(props:NavigationProps) {
    return (
        <Link {...props} href={props.href} target="_blank" className={styles.link}>{props.children}</Link>        
    );
};
                        