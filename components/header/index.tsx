import styles from "./styles.module.css";
import { Navbar, ThemeSwitch, LanguageSwitch } from "@/components";
import { Navigation } from "@/ui"
// import { HeaderProps } from "@/lib/types";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "lucide-react";
import { inter } from "@/lib/fonts";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.logo} ${inter.className}`}>teoxys</div>
            <Navbar/>
            <div className={styles.right_content}>
                {/* <ThemeSwitch/> */}
                {/* <div className={styles.splitter}></div> */}
                <LanguageSwitch/>
                <div className={styles.splitter}></div>
                    <div className={styles.links_container}>
                        <Navigation href="https://www.linkedin.com/in/thiago-salaberry/"><Linkedin className={styles.linkedin}/></Navigation>
                        <Navigation href="https://github.com/thiagoSalaberry"><Github className={styles.github}/></Navigation>
                    </div>
                </div>
        </header>
    );
};
                        