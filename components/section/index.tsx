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

import { AboutMeSection } from "./about-me-section"
import { ProjectsSection } from "./project-section";
import { TechSection } from "./tech-section";
import { EducationSection } from "./education-section";
import { ContactSection } from "./contact-section";

export function Section(props:SectionProps) {
    const language = useRecoilValue(languageAtom)
    const sectionsMap = {
        0: <AboutMeSection language={language} opened={props.opened}/>,
        1: <ProjectsSection language={language} opened={props.opened}/>,
        2: <TechSection language={language} opened={props.opened}/>,
        3: <EducationSection language={language} opened={props.opened}/>,
        4: <ContactSection language={language} opened={props.opened}/>
    };
    const titleMap = {
        0: translation[language].about_me_section.title,
        1: translation[language].projects_section.title,
        2: translation[language].techs_section.title,
        3: translation[language].education_section.title,
        4: translation[language].contact_section.title,
    }
    console.log(props.index, props.title)
    return (
        <div
            className={`
                ${styles.inner_content}
                ${props.index == 1 && styles.projects}
                ${props.opened && styles.opened}
            `}
            style={
                props.opened ? {
                    top: 0,
                    left: 0,
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
            <div className={`${styles.button_container} ${props.opened && styles.opened} ${styles[props.title.replaceAll(" ", "_")]}`}>
                <Button
                    onClick={props.onClick}
                    variant="main_icon"
                >{props.opened ? <Minimize2 size={20}/> : <Maximize2 size={20}/>}</Button>
            </div>
            {sectionsMap[props.index as keyof typeof sectionsMap]}
        </div>
    );
};