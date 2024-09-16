import styles from "./styles.module.css";
import { SectionProps } from "@/lib/types";
import { Button, Input, Navigation, Textarea } from "@/ui";
import { Box, Copy, CopyCheck, Download, Linkedin, LinkedinIcon, MapPin, Coffee, Book, Maximize2, Minimize2, BookCheck, Send, LayoutGridIcon } from "lucide-react";
import { useState } from "react";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import Image from "next/image";
import img1 from "@/public/man_1.jpg";
import img2 from "@/public/man_2.jpg";
import img3 from "@/public/man_3.jpg";
import { Github, Hourglass } from "react-bootstrap-icons";
import { ContactForm, Project, TechCard } from "@/components";
import { techsMap } from "@/lib/techsMap";
import copy from "copy-to-clipboard";
import { useContactForm } from "@/hooks/useContactForm";
import { Miss_Fajardose } from "next/font/google";
import { useRecoilValue } from "recoil";
import { languageAtom, sectionAtom } from "@/lib/atoms";
import translation from "@/lib/translation.json"
import {motion, AnimatePresence} from "framer-motion";

export function Section(props:SectionProps) {
    const language = useRecoilValue(languageAtom)
    const sectionsMap = {
        0: <Projects language={language} opened={props.opened}/>,
        1: <AboutMe language={language} opened={props.opened}/>,
        2: <Technologies language={language} opened={props.opened}/>,
        3: <Contact language={language} opened={props.opened}/>,
        4: <Education language={language}/>
    };
    const titleMap = {
        0: translation[language].projects_section.title,
        1: translation[language].about_me_section.title,
        2: translation[language].techs_section.title,
        3: translation[language].contact_section.title,
        4: translation[language].education_section.title,
    }
    return (
        <div
            className={`
                ${styles.inner_content}
                ${(props.expandable && props.opened) && styles.opened}
            `}
            style={
                props.expandable && props.opened ? {
                    top: props.mainRef.current?.offsetTop,
                    left: props.mainRef.current?.offsetLeft,
                    width: props.mainRef.current?.offsetWidth,
                    height: props.mainRef.current?.offsetHeight,
                } : {
                    top: props.sectionRef.current?.offsetTop,
                    left: props.sectionRef.current?.offsetLeft,
                    width: props.sectionRef.current?.offsetWidth,
                    height: props.sectionRef.current?.offsetHeight,
                }
            }
        >
            <h2 className={`${styles.section_title} ${bigShouldersDisplay.className} ${props.opened && styles.opened}`}>{titleMap[props.index as keyof typeof titleMap]}</h2>
            {props.expandable && (
                <div className={`${styles.button_container} ${props.opened && styles.opened}`}>
                    <Button
                        onClick={props.onClick}
                        variant="main_icon"
                    >{props.opened ? <Minimize2 /> : <Maximize2 />}</Button>
                </div>
            )}
            {sectionsMap[props.index as keyof typeof sectionsMap]}
        </div>
    );
};

function Projects({opened, language}: {opened:boolean, language: "es" | "en"}) {
    return (
        <div className={styles.projects_container}>
            <Project
                index={0}
                // title="E-COMMERCE"
                // description="Un comercio electrónico para publicar productos y comprar a través de MercadoPago."
                title={translation[language].projects_section[1].title}
                description={translation[language].projects_section[1].desc}
                githubLink="https://github.com/thiagoSalaberry/frontend"
                link="https://frontend-seven-blond.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                opened={opened}
                language={language}
            />
            <Project
                index={1}
                // title="URL SHORTENER"
                // description="Una web para recortar URLs largos y hacerlos más legibles y cómodos."
                title={translation[language].projects_section[2].title}
                description={translation[language].projects_section[2].desc}
                githubLink="https://github.com/thiagoSalaberry/url-shortener"
                link="https://teoxys-url.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "PostgreSQL"]}
                opened={opened}
                language={language}
            />
            <Project
                index={2}
                // title="TEOXYS TATTOO"
                // description="Una web para facilitar la reservación de turnos de tatuajes."
                title={translation[language].projects_section[3].title}
                description={translation[language].projects_section[3].desc}
                githubLink="https://github.com/thiagoSalaberry/landing-page"
                link="https://landing-page-zeta-mauve.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "Styled-Components"]}
                opened={opened}
                language={language}
            />
            <Project
                index={3}
                // title="PIEDRA PAPEL O TIJERA"
                // description="Un piedra papel o tijera online para jugar con tus amigos en tiempo real."
                title={translation[language].projects_section[4].title}
                description={translation[language].projects_section[4].desc}
                githubLink="https://github.com/thiagoSalaberry/ppt-online"
                link="https://ppt-online-react.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                opened={opened}
                language={language}
            />
        </div>
    )
}

function AboutMe({opened, language}: {opened:boolean, language: "es" | "en"}) {
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
        <div className={`${styles.about_me_container} ${opened && styles.opened}`}>
            <div className={styles.name_skeleton}>
                <h3 className={styles.name}>THIAGO SALABERRY</h3>
            </div>
            <div className={styles.list_skeleton}>
                <ul className={`${styles.about_me_list} ${poppins.className}`}>
                    <li className={styles.about_me_item}>
                        <MapPin size={18}/> Buenos Aires, <img className={styles.arg} src="/argentina.gif" alt="argentina" />
                    </li>
                    <li className={styles.about_me_item}>
                        <Coffee size={18}/> {translation[language].about_me_section.list[0]}
                    </li>
                    <li className={styles.about_me_item}>
                        <Book size={18}/> {translation[language].about_me_section.list[1]}
                    </li>
                </ul>
            </div>
            <div className={styles.description_skeleton}>
                <p className={`${poppins.className} ${styles.description}`}>
                    {/* Soy un <b>Desarrollador Web Fullstack</b> especializado en el desarrollo de aplicaciones web nativas y en el uso
                    tecnologías avanzadas como <b>React</b> para ofrecer experiencias de usuario excepcionales. */}
                    {translation[language].about_me_section.desc.split("&").map((text, index) => {
                        if(index != 1 && index != 3) return <span key={index}>{text}</span>
                        return <b key={index}>{text}</b>
                    })}
                </p>
            </div>
            <div className={styles.image_skeleton}>
                <div className={styles.img_container}>
                    <img src="man_3.jpg" alt="" />
                </div>
            </div>
            <div className={styles.button_skeleton}>
                <Button variant="secondaryIcon" onClick={handleDownload}>CV <Download size={20}/></Button>
            </div>
        </div>
    )
}

function Technologies({opened, language}: {opened:boolean, language: "es" | "en"}) {
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
        <div className={`${styles.techs_container} ${opened && styles.opened}`}>
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
};

function Contact({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const { form, setForm, disabled, setDisabled } = useContactForm();
    const [copied, setCopied] = useState<boolean>(false);
    const handleChange = (fieldName: keyof typeof form, value:string):void => {
        setForm({
            ...form,
            [fieldName]: {
                value: value,
                missing: false
            }
        })
    };
    const handleInvalid = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        const input = e.target as HTMLInputElement | HTMLTextAreaElement;
        setForm({
            ...form,
            [input.name]: {
                value: input.value,
                missing: true
            }
        })
    };
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false)
        }, 2000);
    }
    const handleCopy = () => {
        setCopied(true);
        copy("thiagosalaberry99@gmail.com")
        setTimeout(() => {
            setCopied(false);            
        }, 2000);
    }
    return (
        <div className={styles.contact_container}>
            <p className={`${styles.contact_p} ${poppins.className}`}>
                {/* Completá el formulario o enviame un mail a la siguiente dirección: <b onClick={handleCopy} className={styles.email}>thiagosalaberry99@gmail.com {copied ? <CopyCheck size={18}/> : <Copy size={18}/>}</b> */}
                {translation[language].contact_section.contact_section_quote} <b onClick={handleCopy} className={styles.email}>thiagosalaberry99@gmail.com {copied ? <CopyCheck size={18}/> : <Copy size={18}/>}</b>
            </p>
            <div className={styles.contact_links_container}>
                <Navigation href="https://www.linkedin.com/in/thiago-salaberry/"><Linkedin size={24}/> LinkedIn</Navigation>
                <Navigation href="https://github.com/thiagoSalaberry"><Github size={24}/> GitHub</Navigation>
            </div>
            {opened && (
                <ContactForm language={language}/>
            )}
        </div>
    )
};

function Education({language}: {language:"es" | "en"}) {
    return (
        <div className={`${styles.fill_container} ${poppins.className}`}>
            <div className={styles.education}>
                <h4 className={styles.education_title}>Fullstack Software Developer <span><BookCheck size={20}/></span></h4>
                <p className={styles.education_info}>
                    APX | 2022 - 2024
                </p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.education}>
                <h4 className={styles.education_title}>{translation[language].education_section.list[1].title} <span className={styles.animated}><Hourglass size={20}/></span></h4>
                <p className={styles.education_info}>
                {translation[language].education_section.list[1].lapse}
                </p>
            </div>
        </div>
    )
}