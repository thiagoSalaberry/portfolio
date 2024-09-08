import styles from "./styles.module.css";
import { SectionProps } from "@/lib/types";
import { Button } from "@/ui";
import { Box, Download, Linkedin, LinkedinIcon, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import { bigShouldersDisplay } from "@/lib/fonts";
import Image from "next/image";
import img1 from "@/public/man_1.jpg";
import img2 from "@/public/man_2.jpg";
import img3 from "@/public/man_3.jpg";
import { Github } from "react-bootstrap-icons";
import { Project } from "@/components";

export function Section(props:SectionProps) {
    const sectionsMap = {
        0: <Projects/>,
        1: <AboutMe opened={props.opened}/>,
        2: <Technologies/>,
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
            {/* <div className={styles.img_container}>
                <Image src={img3} alt="me.jpg" style={{height: "100%", width: "auto", objectFit: "scale-down", scale:".1", transform:"translate(1000px, 1000px)"}}/>
            </div> */}
            <div className={styles.about_me_buttons_container}>
                <Button variant="main_icon" onClick={()=>{}}><Linkedin size={20}/></Button>
                <Button variant="main_icon" onClick={()=>{}}><Github size={20}/></Button>
                <Button variant="secondaryIcon" onClick={()=>{}}>CV <Download size={20}/></Button>
            </div>
        </div>
    )
}

function Technologies() {
    return (
        <div className={styles.techs_container}>
            TECHS CONTENT
        </div>
    )
};

function Contact() {
    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_buttons_container}>
                <Button variant="main_icon" onClick={()=>{}}><LinkedinIcon size={20}/></Button>
                <Button variant="main_icon" onClick={()=>{}}><Github size={20}/></Button>
                <Button variant="secondaryIcon" onClick={()=>{}}>CV <Download size={20}/></Button>
            </div>
        </div>
    )
};

function Fill() {
    return (
        <div className={styles.fill_container}>
            <div className={styles.education}>
                <h4 className={styles.education_title}>Fullstack Software Developer</h4>
                <p className={styles.education_info}>
                    APX <span>2022 - 2024</span>
                </p>
            </div>
            <div className={styles.education}>
                <h4 className={styles.education_title}>Tecnicatura en Programación</h4>
                <p className={styles.education_info}>
                    Universidad Tecnológica Nacional <span>2024 - presente</span>
                </p>
            </div>
        </div>
    )
}