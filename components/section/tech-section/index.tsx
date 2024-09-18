import { poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { techsMap } from "@/lib/techsMap";
import translation from "@/lib/translation.json"
import { TechCard } from "@/components/tech-card";
import { motion, AnimatePresence } from "framer-motion"
export function TechSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    return (
        <>
            <Mobile opened={opened} language={language}/>
            <Desktop opened={opened} language={language}/>
        </>
    )
};
                    
function Mobile({opened, language}: {opened:boolean, language: "es" | "en"}) {
    return (
        <div className={`${styles.techs_section_container} ${styles.mobile} ${opened && styles.opened}`}>
            <div className={`${styles.techs_container} ${opened && styles.opened}`}>
                {Object.values(techsMap).map((tech, index) => {
                    return <Tech key={index} img={tech.img} title={tech.name}/>
                })}
            </div>
            <p className={`${styles.desc} ${opened && styles.opened} ${poppins.className}`}>Repertorio de las tecnologías que domino.</p>
        </div>
    )
}
function Tech({title, img}: {title:string, img:string}) {
    return (
        <div className={styles.tech_container}>
            <div className={styles.tech_img_container}>
                <img src={`/${img}.png`} alt={title} className={styles.tech_img} />
            </div>
            <b className={styles.tech_title}>{title}</b>
        </div>
    )
}

function Desktop({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const techsAnimation = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 1
        }
    }
    return (
        <div className={`${styles.techs_container} ${styles.desktop} ${opened && styles.opened}`}>
            {!opened ? (
                <AnimatePresence>
                    <motion.div initial={techsAnimation.initial} animate={techsAnimation.animate} exit={techsAnimation.exit} transition={{duration: 1}} className={`${styles.grid} ${opened && styles.hidden}`}>
                        {[...Array(9)].map((_, i) => {
                            return (
                                <div className={styles.column} key={i}>
                                    {[...Array(5)].map((_, sliderIndex) => (
                                        <div className={styles.column_slider} key={sliderIndex}>
                                            {[...Array(3)].map((_, j) => {
                                                const index = (i * 3 + j) % Object.keys(techsMap).length;
                                                return (
                                                    <TechCard
                                                        key={index}
                                                        size="small"
                                                        index={index}
                                                    />
                                                )
                                            })}
                                        </div>
                                    ))}
                                </div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>
            ) : (
                <>
                    <div className={styles.concept_container}>
                        <h4>{translation[language].techs_section.key_concepts.title}</h4>
                        <p className={poppins.className}>{translation[language].techs_section.key_concepts.desc}</p>
                        <ul className={styles.concept_list}>
                            <li>
                                <b>{translation[language].techs_section.key_concepts.list[0].title}</b>
                                <p className={poppins.className}>{translation[language].techs_section.key_concepts.list[0].desc}</p>
                            </li>
                            <li>
                                <b>{translation[language].techs_section.key_concepts.list[1].title}</b>
                                <p className={poppins.className}>{translation[language].techs_section.key_concepts.list[1].desc}</p>
                            </li>
                            <li>
                                <b>{translation[language].techs_section.key_concepts.list[2].title}</b>
                                <p className={poppins.className}>{translation[language].techs_section.key_concepts.list[2].desc}</p>
                            </li>
                            <li>
                                <b>{translation[language].techs_section.key_concepts.list[3].title}</b>
                                <p className={poppins.className}>{translation[language].techs_section.key_concepts.list[3].desc}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.cards_container}>
                        {[...Array(18)].map((_, index) => {
                            return (
                                <TechCard
                                    size="large"
                                    index={index}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}