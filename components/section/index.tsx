import styles from "./styles.module.css";
import { SectionProps } from "@/lib/types";
import { Button, Input, Navigation, Textarea } from "@/ui";
import { Box, Copy, CopyCheck, Download, Linkedin, LinkedinIcon, MapPin, Coffee, Book, Maximize2, Minimize2, BookCheck, Send } from "lucide-react";
import { useState } from "react";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import Image from "next/image";
import img1 from "@/public/man_1.jpg";
import img2 from "@/public/man_2.jpg";
import img3 from "@/public/man_3.jpg";
import { Github, Hourglass } from "react-bootstrap-icons";
import { Project, TechCard } from "@/components";
import { techsMap } from "@/lib/techsMap";
import copy from "copy-to-clipboard";
import { useContactForm } from "@/hooks/useContactForm";
import { Miss_Fajardose } from "next/font/google";

export function Section(props:SectionProps) {
    const sectionsMap = {
        0: <Projects opened={props.opened}/>,
        1: <AboutMe opened={props.opened}/>,
        2: <Technologies opened={props.opened}/>,
        3: <Contact opened={props.opened}/>,
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
            <h2 className={`${styles.section_title} ${bigShouldersDisplay.className} ${props.opened && styles.opened} ${props.index == 10 && styles.white}`}>{props.title}</h2>
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

function Projects({opened}: {opened:boolean}) {
    return (
        <div className={styles.projects_container}>
            <Project
                index={0}
                title="E-COMMERCE"
                description="Un comercio electrónico para publicar productos y comprar a través de MercadoPago."
                githubLink="https://github.com/thiagoSalaberry/frontend"
                link="https://frontend-seven-blond.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                opened={opened}
            />
            <Project
                index={1}
                title="URL SHORTENER"
                description="Una web para recortar URLs largos y hacerlos más legibles y cómodos."
                githubLink="https://github.com/thiagoSalaberry/url-shortener"
                link="https://teoxys-url.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "PostgreSQL"]}
                opened={opened}
            />
            <Project
                index={2}
                title="TEOXYS TATTOO"
                description="Una web para facilitar la reservación de turnos de tatuajes."
                githubLink="https://github.com/thiagoSalaberry/landing-page"
                link="https://landing-page-zeta-mauve.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "Styled-Components"]}
                opened={opened}
            />
            <Project
                index={3}
                title="PIEDRA PAPEL O TIJERA"
                description="Un piedra papel o tijera online para jugar con tus amigos en tiempo real."
                githubLink="https://github.com/thiagoSalaberry/ppt-online"
                link="https://ppt-online-react.vercel.app/"
                techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                opened={opened}
            />
        </div>
    )
}

function AboutMe({opened}: {opened:boolean}) {
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
                    <img src="man_3.jpg" alt="" />
                </div>
            </div>
            <div className={styles.button_skeleton}>
                <Button variant="secondaryIcon" onClick={()=>{}}>CV <Download size={20}/></Button>
            </div>
        </div>
    )
}

function Technologies({opened}: {opened:boolean}) {
    return (
        <div className={`${styles.techs_container} ${opened && styles.opened}`}>
            {!opened ? (
                <div className={`${styles.grid} ${opened && styles.hidden}`}>
                    {[...Array(9)].map((_, i) => {
                        return (
                            <div className={styles.column} key={i}>
                                {[...Array(5)].map((_, sliderIndex) => (
                                    <div className={styles.column_slider} key={sliderIndex}>
                                        {[...Array(3)].map((_, j) => {
                                            const index = (i * 3 + j) % Object.keys(techsMap).length;
                                            return (
                                                <TechCard
                                                    key={j}
                                                    size="small"
                                                    index={index}
                                                />
                                                // <BoxImage key={j}>
                                                //     <img
                                                //         style={{height: index == 15 ? "100%" : "", width: index == 15 ? "auto" : ""}}
                                                //         src={`/${techsMap[index as keyof typeof techsMap].img}.png`}
                                                //         alt={`/${techsMap[index as keyof typeof techsMap].name}`}
                                                //     />
                                                //     <b className={styles.box_title}>
                                                //         {techsMap[index as keyof typeof techsMap].name}
                                                //     </b>
                                                // </BoxImage>
                                            )
                                        })}
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <>
                    <div className={styles.concept_container}>
                        <h4>Conceptos clave</h4>
                        <p className={poppins.className}>Además de las tecnologías detalladas, comprendo y aplico conceptos fundamentales que son cruciales para desarrollar de manera efectiva:</p>
                        <ul className={styles.concept_list}>
                            <li>
                                <b>Programación Orientada a Objetos</b>
                                <p className={poppins.className}>Este paradigma me permite estructurar el código de manera modular y reutilizable, organizando funcionalidades en clases y objetos. Gracias a la POO, puedo crear aplicaciones más escalables y mantenibles.</p>
                            </li>
                            <li>
                                <b>Arquitectura de aplicaciones:</b>
                                <p className={poppins.className}>Comprendo cómo estructurar una aplicación web, desde un patrón de diseño frontend-backend como MVC hasta la implementación de microservicios, lo que facilita la creación de sistemas más grandes y complejos.</p>
                            </li>
                            <li>
                                <b>Control de estado y gestión de datos:</b>
                                <p className={poppins.className}>Tanto en aplicaciones nativas como en aplicaciones desarrolladas sobre React.js, manejo eficientemente el estado de la aplicación de forma nativa o mediante herramientas como Recoil o Redux, lo que me permite mantener la lógica y los datos sincronizados a lo largo de toda la interfaz.</p>
                            </li>
                            <li>
                                <b>Optimización y buenas prácticas:</b>
                                <p className={poppins.className}>Tengo en cuenta principios como DRY y SOLID, lo que me ayuda a escribir código más limpio y eficiente. Además, estoy familizarizado con conceptos de optimización de rendimiento tanto en el lado del cliente como en el lado del servidor.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.cards_container}>
                        {[...Array(18)].map((_, index) => {
                            return (
                                <TechCard
                                size="large"
                                index={index}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
};
// function BoxImage({children}: {children:React.ReactNode}) {
//     return <div className={styles.box}>{children}</div>
// }

function Contact({opened}: {opened:boolean}) {
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
                Completá el formulario o enviame un mail a la siguiente dirección: <b onClick={handleCopy} className={styles.email}>thiagosalaberry99@gmail.com {copied ? <CopyCheck size={18}/> : <Copy size={18}/>}</b>
            </p>
            <div className={styles.contact_links_container}>
                <Navigation href="https://www.linkedin.com/in/thiago-salaberry/"><Linkedin size={24}/> LinkedIn</Navigation>
                <Navigation href="https://github.com/thiagoSalaberry"><Github size={24}/> GitHub</Navigation>
            </div>
            {opened && (
                <form className={`${styles.contact_form} ${poppins.className}`} onInvalid={handleInvalid} onSubmit={handleSubmit}>
                    <div className={styles.name_section}>
                        <Input
                            label="Nombre"
                            name="name"
                            type="text"
                            value={form.name.value}
                            placeholder="ej. Thiago Salaberry"
                            disabled={disabled}
                            missing={form.name.missing}
                            onChange={(value:string) => handleChange("name", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.email_section}>
                        <Input
                            label="E-Mail"
                            name="email"
                            type="email"
                            value={form.email.value}
                            placeholder="ej. thiagosalaberry99@gmail.com"
                            disabled={disabled}
                            missing={form.email.missing}
                            onChange={(value:string) => handleChange("email", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.company_section}>
                        <Input
                            label="Compañía"
                            name="company"
                            type="text"
                            value={form.company.value}
                            placeholder="ej. Amazon"
                            disabled={disabled}
                            missing={form.company.missing}
                            onChange={(value:string) => handleChange("company", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.message_section}>
                        <Textarea
                            label="Mensaje"
                            name="message"
                            value={form.message.value}
                            placeholder="ej. ¡Hola Thiago, queremos contratarte!"
                            disabled={disabled}
                            missing={form.message.missing}
                            onChange={(value:string) => handleChange("message", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.submit_section}>
                        <Button disabled={disabled} type="submit" variant="mainIcon" onClick={()=>{}}>Enviar <Send size={20}/></Button>
                    </div>
                    <div className={styles.form_image}>
                        <img src="/hello.png" alt="contact.png" />
                    </div>
                </form>
                // <div className={styles.form_sketch}>
                //     <div className={styles.input_container_sketch}>
                //         <div className={styles.label_sketch}></div>
                //         <div className={styles.input_sketch}></div>
                //     </div>
                //     <div className={styles.input_container_sketch}>
                //         <div className={styles.label_sketch}></div>
                //         <div className={styles.input_sketch}></div>
                //     </div>
                //     <div className={styles.input_container_sketch}>
                //         <div className={styles.label_sketch}></div>
                //         <div className={styles.input_sketch}></div>
                //     </div>
                //     <div className={styles.input_container_sketch}>
                //         <div className={styles.label_sketch}></div>
                //         <div className={styles.textarea_sketch}></div>
                //     </div>
                //     <div className={styles.img_sketch}></div>
                //     <div className={styles.button_sketch}></div>
                // </div>
            )}
        </div>
    )
};

function Fill() {
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
                <h4 className={styles.education_title}>Tecnicatura en Programación <span className={styles.animated}><Hourglass size={20}/></span></h4>
                <p className={styles.education_info}>
                    UTN | 2024 - presente
                </p>
            </div>
        </div>
    )
}