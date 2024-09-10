import styles from "./styles.module.css";
import { NavigationProps } from "@/lib/types";
import Link from "next/link";
import { poppins } from "@/lib/fonts";

export function Navigation(props:NavigationProps) {
    return (
        <Link {...props} href={props.href} target="_blank" className={`${styles.link} ${poppins.className}`}>
            {props.children}
            {props.text && <p>{props.text}</p>}
        </Link>        
    );
};
                        