import styles from "./header.module.css";
import Logo from "../logo";
import Hamburguer from "../hamburguer";
import Language from "../language";
import translation from "@/lib/translation.json";
import { useRecoilValue } from "recoil";
import { languajeState } from "@/atoms/languageState";
import { scrollToSection } from "@/lib/functions";
export default function Header() {
    const language = useRecoilValue(languajeState)
    return (
        <header className={styles["header"]}>
            <Logo />
            <div className={styles["header__rigth__content"]}>
                <Language />
                <Hamburguer />
                <nav className={`${styles["header__nav"]} ${styles["desktop"]}`}>
                    <ul className={styles["header__nav__list"]}>
                        <li className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("techs")}>{translation[language].techs_section.title}</li>
                        <li className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("projects")}>{translation[language].projects_section.title}</li>
                        <li className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("about__me")}>{translation[language].about_me_section.title}</li>
                        <li className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("contact")}>{translation[language].contact_section.title}</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}