import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import translation from "@/lib/translation.json";
import { Button } from "@/ui";
import { AnimatePresence, motion } from "framer-motion";
import { Book, Coffee, Download, MapPin } from "lucide-react";
const animation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}
export function AboutMeSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const handleDownload = () => {
        const cvPDF = language == "es" ? "/CV - Sep.pdf" : "/CV- Sep Eng.pdf" ;
        const link = document.createElement("a");
        link.href = cvPDF;
        link.download = "CV - Thiago Salaberry.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            {opened ? (
                <AnimatePresence>
                    <motion.div initial={animation.initial} animate={animation.animate} exit={animation.exit} transition={{duration: 1}} className={`${styles.about_me_container} ${poppins.className}`}>
                        <div className={styles.name_container}>
                            <h2 className={`${styles.name} ${bigShouldersDisplay.className}`}>THIAGO SALABERRY</h2>
                        </div>
                        <div className={styles.list_container}>
                            <ul className={styles.about_me_list}>
                            <li className={styles.about_me_item}>
                                    <MapPin size={18}/> Buenos Aires, <img className={styles.arg} src="/argentina.gif" alt="argentina" />
                                </li>
                                <li className={styles.about_me_item}>
                                    <Coffee size={18}/> {translation["es"].about_me_section.list[0]}
                                </li>
                                <li className={styles.about_me_item}>
                                    <Book size={18}/> {translation["es"].about_me_section.list[1]}
                                </li>
                            </ul>
                        </div>
                        <div className={styles.about_me_role_container}>
                            <h1 className={`${styles.about_me_role} ${bigShouldersDisplay.className}`}>FULL<br/>STACK<br/>WEB<br/>DEV</h1>
                        </div>
                        <div className={styles.about_me_img_container}>
                                <img src="man_3.webp" alt="me" loading="lazy"/>
                        </div>
                        <div className={styles.about_me_button_container}>
                            <Button variant="secondaryIcon" onClick={handleDownload}>CV <Download size={20}/></Button>
                        </div>
                        <div className={styles.about_me_desc_container}>
                            <p className={styles.about_me_desc}>
                                {translation["es"].about_me_section.desc.split("&").map((text, index) => {
                                    if(index != 1 && index != 3) return text
                                    return <b key={text}>{text}</b>
                                })}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            ) : (
                <div className={styles.container_contained}>
                    <h2 className={`${styles.name} ${bigShouldersDisplay.className}`}>THIAGO SALABERRY</h2>
                    <b className={styles.profesion}>FULLSTACK WEB DEVELOPER</b>
                    <Button variant="mainIcon" onClick={handleDownload}>CV <Download size={20}/></Button>
                </div>
            )}
        </>
    )
};