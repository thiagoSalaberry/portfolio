import styles from "./styles.module.css";
import { SectionProps } from "@/lib/types";
import { Button } from "@/ui";
import { Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import { bigShouldersDisplay } from "@/lib/fonts";

export function Section(props:SectionProps) {
    return (
        <div
            className={`
                ${styles.inner_content}
                ${props.opened && styles.opened}
            `}
            style={
                props.opened ? {
                    top: props.mainRef.current?.offsetTop,
                    left: props.mainRef.current?.offsetLeft,
                    width: props.mainRef.current?.offsetWidth,
                    height: props.mainRef.current?.offsetHeight,
                } : {
                    top: props.sectionRef.current?.offsetTop,
                    left: props.sectionRef.current?.offsetLeft,
                    width: props.sectionRef.current?.offsetWidth,
                    height: props.sectionRef.current?.offsetHeight,
                }
            }
        >
        <h2 className={`${styles.section_title} ${bigShouldersDisplay.className}`}>{props.title}</h2>
        <div className={styles.button_container}>
            <Button
                onClick={props.onClick}
                variant="main_icon"
            >{props.opened ? <Minimize2 /> : <Maximize2 />}</Button>
        </div>
            {props.children}
        </div>
    );
};
                        