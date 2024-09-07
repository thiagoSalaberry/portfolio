"use client";
import styles from "./styles.module.css";
import { Header, Section, TechCard } from "@/components";

export default function Page() {
    return (
        <div className={styles.page}>
            {/* <Header /> */}
            <TechCard title="React.js" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img={""}/>
        </div>
    )
};
                        