import styles from "./styles.module.css";
import { SectionProps } from "@/lib/types";
import { Button, Navigation } from "@/ui";
import { Box, Copy, CopyCheck, Download, Linkedin, LinkedinIcon, MapPin, Coffee, Book, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import Image from "next/image";
import img1 from "@/public/man_1.jpg";
import img2 from "@/public/man_2.jpg";
import img3 from "@/public/yo.png";
import { Github } from "react-bootstrap-icons";
import { Project } from "@/components";
import { techsMap } from "@/lib/techsMap";
import copy from "copy-to-clipboard";

export function Section(props:SectionProps) {
    const sectionsMap = {
        0: <Projects/>,
        1: <AboutMe opened={props.opened}/>,
        2: <Technologies opened={props.opened}/>,
        3: <Contact/>,
        4: <Fill/>
    }
    return (
        <div
            className={`
                ${styles.inner_content}
                ${props.opened && styles.opened}
            `}
            style={
                props.opened ? {
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
            <h2 className={`${styles.section_title} ${bigShouldersDisplay.className} ${props.opened && styles.opened} ${props.index == 1 && styles.white}`}>{props.title}</h2>
            {props.expandable && (
                <div className={`${styles.button_container} ${props.opened && styles.opened}`}>
                <Button
                    onClick={props.onClick}
                    variant="main_icon"
                    >{props.opened ? <Minimize2 /> : <Maximize2 />}</Button>
                </div>
            )}
            {/* {props.children} */}
            {sectionsMap[props.index as keyof typeof sectionsMap]}
        </div>
    );
};

function Projects() {
    return (
        <div className={styles.projects_container}>
            <Project index={0} title="E-COMMERCE" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
            <Project index={1} title="URL SHORTENER" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
            <Project index={2} title="TEOXYS TATTOO" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
            <Project index={3} title="PIEDRA PAPEL O TIJERA" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
        </div>
    )
}

function AboutMe({opened}: {opened:boolean}) {
    return (
        <div className={`${styles.about_me_container} ${opened && styles.opened}`}>
            {/* <h3 className={styles.name}>THIAGO SALABERRY</h3> */}
            {/* <ul className={`${styles.about_me_list} ${poppins.className}`}>
                <li className={styles.about_me_item}>
                    <MapPin size={18}/> Buenos Aires, <img src="/arg.png" alt="argentina" />
                </li>
                <li className={styles.about_me_item}>
                    <Coffee size={18}/> Motorizado por mate y código
                </li>
                <li className={styles.about_me_item}>
                    <MapPin size={18}/> Siempre aprendiendo, actualmente explorando ciencia de datos
                </li>
            </ul> */}
            {/* <p className={`${poppins.className} ${styles.description}`}>
                Soy un <b>Desarrollador Web Fullstack</b> especializado en el desarrollo de aplicaciones web nativas y en el uso
                tecnologías avanzadas como <b>React</b> para ofrecer experiencias de usuario excepcionales.
            </p> */}
            <div className={styles.name_skeleton}>
                <h3 className={styles.name}>THIAGO SALABERRY</h3>
            </div>
            <div className={styles.list_skeleton}>
                <ul className={`${styles.about_me_list} ${poppins.className}`}>
                    <li className={styles.about_me_item}>
                        <MapPin size={18}/> Buenos Aires, <img src="/arg.png" alt="argentina" />
                    </li>
                    <li className={styles.about_me_item}>
                        <Coffee size={18}/> Motorizado por mate y código
                    </li>
                    <li className={styles.about_me_item}>
                        <Book size={18}/> Siempre aprendiendo, actualmente explorando ciencia de datos
                    </li>
                </ul>
            </div>
            <div className={styles.description_skeleton}>
                <p className={`${poppins.className} ${styles.description}`}>
                    Soy un <b>Desarrollador Web Fullstack</b> especializado en el desarrollo de aplicaciones web nativas y en el uso
                    tecnologías avanzadas como <b>React</b> para ofrecer experiencias de usuario excepcionales.
                </p>
            </div>
            <div className={styles.image_skeleton}>
                <div className={styles.img_container}>
                    {/* <Image src={img3} alt="/yo.png" style={{height: "auto", width: "100%"}}/> */}
                    <img
                        src="https://api.dicebear.com/9.x/notionists/svg?seed=Max"
                        alt="avatar"
                    />
                </div>
            </div>
            <div className={styles.button_skeleton}>
                <Button variant="secondaryIcon" onClick={()=>{}}>CV <Download size={20}/></Button>
            </div>
            {/* <Button variant="secondaryIcon" onClick={()=>{}}>CV</Button> */}
            {/* <div className={styles.img_container}>
                <Image src={img3} alt="/yo.png" style={{height: "auto", width: "50%"}}/>
            </div>
            <p className={`${poppins.className} ${styles.country}`}>Buenos Aires, <img src="/arg.png" alt="argentina" /></p>
            <p className={`${poppins.className} ${styles.description}`}>
                Soy un <b>Desarrollador Web Fullstack</b> especializado en el desarrollo de aplicaciones web nativas y en el uso
                tecnologías avanzadas como <b>React</b> para ofrecer experiencias de usuario excepcionales.
            </p> */}

        </div>
    )
}

function Technologies({opened}: {opened:boolean}) {
    return (
        <div className={styles.techs_container}>
            <div className={`${styles.grid} ${opened && styles.hidden}`}>
                {[...Array(8)].map((_, i) => {
                    return (
                        <div className={styles.column} key={i}>
                            {[...Array(5)].map((_, sliderIndex) => (
                                <div className={styles.column_slider} key={sliderIndex}>
                                    {[...Array(3)].map((_, j) => {
                                        const index = (i * 3 + j) % Object.keys(techsMap).length;
                                        return (
                                            <BoxImage key={j}>
                                                <img
                                                    style={{height: index == 15 ? "100%" : "", width: index == 15 ? "auto" : ""}}
                                                    src={`/${techsMap[index as keyof typeof techsMap].img}.png`}
                                                    alt={`/${techsMap[index as keyof typeof techsMap].name}`}
                                                />
                                                <b className={styles.box_title}>
                                                    {techsMap[index as keyof typeof techsMap].name}
                                                </b>
                                            </BoxImage>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
function BoxImage({children}: {children:React.ReactNode}) {
    return <div className={styles.box}>{children}</div>
}

function Contact() {
    const [copied, setCopied] = useState<boolean>(false);
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
                Completá el formulario o enviame un <br/> mail a la siguiente dirección: <b onClick={handleCopy} className={styles.email}>thiagosalaberry99@gmail.com {copied ? <CopyCheck size={18}/> : <Copy size={18}/>}</b>
            </p>
            <div className={styles.contact_buttons_container}>
                <Navigation href="https://www.linkedin.com/in/thiago-salaberry/"><Linkedin size={24}/> LinkedIn</Navigation>
                <Navigation href="https://github.com/thiagoSalaberry"><Github size={24}/> GitHub</Navigation>
            </div>
        </div>
    )
};

function Fill() {
    return (
        <div className={`${styles.fill_container} ${poppins.className}`}>
            <div className={styles.education}>
                <h4 className={styles.education_title}>Fullstack Software Developer</h4>
                <p className={styles.education_info}>
                    APX | 2022 - 2024
                </p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.education}>
                <h4 className={styles.education_title}>Tecnicatura en Programación</h4>
                <p className={styles.education_info}>
                    UTN | 2024 - presente
                </p>
            </div>
        </div>
    )
}