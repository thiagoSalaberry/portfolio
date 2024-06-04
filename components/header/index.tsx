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
                        {/* <li key={1} data-content={translation[language].techs_section.title} className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("techs")}>{translation[language].techs_section.title}</li>
                        <li key={2} data-content={translation[language].projects_section.title} className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("projects")}>{translation[language].projects_section.title}</li>
                        <li key={3} data-content={translation[language].about_me_section.title} className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("about__me")}>{translation[language].about_me_section.title}</li>
                        <li key={4} data-content={translation[language].contact_section.title} className={styles["header__nav__list__item"]} onClick={()=>scrollToSection("contact")}>{translation[language].contact_section.title}</li> */}
                        <li key={1} className={styles.header__nav__list__item} onClick={()=>scrollToSection("techs")}>
                            <p className={styles.item__p} data-content={translation[language].techs_section.title}>{translation[language].techs_section.title}</p>
                        </li>
                        <li key={2} className={styles.header__nav__list__item} onClick={()=>scrollToSection("projects")}>
                            <p className={styles.item__p} data-content={translation[language].projects_section.title}>{translation[language].projects_section.title}</p>
                        </li>
                        <li key={3} className={styles.header__nav__list__item} onClick={()=>scrollToSection("about__me")}>
                            <p className={styles.item__p} data-content={translation[language].about_me_section.title}>{translation[language].about_me_section.title}</p>
                        </li>
                        <li key={4} className={styles.header__nav__list__item} onClick={()=>scrollToSection("contact")}>
                            <p className={styles.item__p} data-content={translation[language].contact_section.title}>{translation[language].contact_section.title}</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}