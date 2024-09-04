"use client";
import styles from "./styles.module.css";
import { LanguageSwitch, ThemeSwitch } from "@/components";

export default function Page() {
    return (
        <div className={styles.page}>
            <LanguageSwitch/>
            <ThemeSwitch/>
        </div>
    )
};
                        