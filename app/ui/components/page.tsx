"use client";
import styles from "./styles.module.css";
import { LanguageSwitch, Navbar, ThemeSwitch } from "@/components";

export default function Page() {
    return (
        <div className={styles.page}>
            <Navbar />
            <LanguageSwitch/>
            <ThemeSwitch/>
        </div>
    )
};
                        