"use client";
import styles from "./styles.module.css";
import { Header, Section } from "@/components";

export default function Page() {
    return (
        <div className={styles.page}>
            <Header />
            <Section title="PROYECTOS">
                <div className={styles.section_content}>
                    {new Array(4).fill(0).map((box, index) => {
                        return <div className={styles.box}>{index + 1}</div>
                    })}
                </div>
            </Section>
        </div>
    )
};
                        