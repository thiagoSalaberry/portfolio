"use client";
import styles from "./page.module.css";
import { Project } from "@/components";
import { Button } from "@/ui";
import { Box, Linkedin } from "lucide-react";
import { Download, Github } from "react-bootstrap-icons";
type Section = {
    title: string;
    content: JSX.Element;
};
export const sections:Section[] = [
    {
        title: "PROYECTOS",
        content: (
            <div className={styles.projects_container}>
                <Project index={0} title="E-COMMERCE" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
                <Project index={1} title="URL SHORTENER" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
                <Project index={2} title="TEOXYS TATTOO" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
                <Project index={3} title="PIEDRA PAPEL O TIJERA" description="La descripción" githubLink="" link="" techs={[...Array(4)].map(tech => <Box size={25}/>)}/>
            </div>
        )
    },
    {
        title: "SOBRE MÍ",
        content: (
            <div className={styles.about_me_container}>
                {/* <div className={styles.about_me_buttons_container}>
                    <Button variant="main_icon" onClick={()=>{}}><Linkedin size={20}/></Button>
                    <Button variant="main_icon" onClick={()=>{}}><Github size={20}/></Button>
                    <Button variant="secondaryIcon" onClick={()=>{}}>CV <Download size={20}/></Button>
                </div> */}
            </div>
        )
    },
    {
        title: "TECNOLOGÍAS",
        content: (
            <div className={styles.techs_container}>
                <b>E-COMMERCE</b>
                <b>URL SHORTENER</b>
                <b>TEOXYS TATTOO</b>
                <b>PIEDRA PAPEL O TIJERA</b>
            </div>
        )
    },
    {
        title: "CONTACTO",
        content: (
            <div className={styles.contact_container}>
                <b>E-COMMERCE</b>
                <b>URL SHORTENER</b>
                <b>TEOXYS TATTOO</b>
                <b>PIEDRA PAPEL O TIJERA</b>
            </div>
        )
    },
    {
        title: "EDUCACIÓN",
        content: (
            <div className={styles.fill_container}>
                <b>E-COMMERCE</b>
                <b>URL SHORTENER</b>
                <b>TEOXYS TATTOO</b>
                <b>PIEDRA PAPEL O TIJERA</b>
            </div>
        )
    },
]