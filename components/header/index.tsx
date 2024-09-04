import styles from "./styles.module.css";
import { Navbar, ThemeSwitch, LanguageSwitch } from "@/components";
import { Navigation } from "@/ui"
// import { HeaderProps } from "@/lib/types";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "lucide-react";
export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>teoxys</div>
            <Navbar/>
            <div className={styles.right_content}>
            <ThemeSwitch/>
            <div className={styles.splitter}></div>
            <LanguageSwitch/>
            <div className={styles.splitter}></div>
                <div className={styles.links_container}>
                    <Navigation href=""><Linkedin size={30}/></Navigation>
                    <Navigation href=""><Github size={30}/></Navigation>
                </div>
            </div>
        </header>
    );
};
                        