import styles from "./styles.module.css";
import { SectionProps } from "@/lib/types";
import { Button } from "@/ui";
import { Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import { bigShouldersDisplay } from "@/lib/fonts";

export function Section(props:SectionProps) {
    const [opened, setOpened] = useState<boolean>(false);
    return (
        <section className={`${styles.section} ${opened && styles.opened}`}>
            <h2 className={`${styles.section_title} ${bigShouldersDisplay.className}`}>{props.title}</h2>
            <div className={styles.button_container}>
                <Button
                    onClick={()=>setOpened(!opened)}
                    variant="main_icon"
                >{opened ? <Minimize2 /> : <Maximize2 />}</Button>
            </div>
            {props.children}
        </section>
    );
};
                        