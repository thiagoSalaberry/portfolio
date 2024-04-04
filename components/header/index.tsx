import styles from "./header.module.css";
import Logo from "../logo";
import Hamburguer from "../hamburguer";
import Language from "../language";
export default function Header() {
    return (
        <header className={styles["header"]}>
            <Logo />
            <div className={styles["header__rigth__content"]}>
                <Language />
                <Hamburguer />
            </div>
        </header>
    )
}