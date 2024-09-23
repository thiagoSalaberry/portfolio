import styles from "./ui.module.css";
import Button from "@/ui/buttons";
import InputComponent from "@/ui/inputs";
import TextArea from "@/ui/text-area";
import { useEffect, useRef, useState } from "react";
import Boxes from "@/components/test-boxes";
import { Boxes as BoxesIcon, Linkedin, Github, Download, Link45deg, ArrowUpRightCircle, Send } from "react-bootstrap-icons";
import { CircularProgress } from "@mui/material";
import TechLogo from "@/ui/tech-logo";
import Navigation from "@/ui/links";
import ProjectCard from "@/components/project-card";
import TechCard from "@/components/tech-card";
import { Footer } from "@/components/footer";
import Layout from "@/components/layout";
export default function UI() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (fieldName: "name" | "email" | "company" | "message", value: string) => {
        setFormState({
            ...formState,
            [fieldName]: value
        });
    };
    const handleClick = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 2000);
    };
    return (
        <Layout>
            <main className={styles["ui-page"]}>
                {/* <h1>UI components</h1>
                <div className={styles["buttons-container"]}>
                    <Button which="Main" onClick={()=>{}}>Main</Button>
                    <Button which="Main" onClick={()=>{}}>Main <Boxes size={30}/></Button>
                </div>
                <div className={styles["buttons-container"]}>
                    <Button which="Secondary" onClick={()=>{}}>Secondary</Button>
                    <Button which="Secondary" onClick={()=>{}}>Secondary <Boxes size={30}/></Button>
                </div>
                <div className={styles["buttons-container"]}>
                    <Button which="IconFilledButton" onClick={()=>{}}><Boxes size={30}/></Button>
                    <Button which="IconButton" onClick={()=>{}}><Boxes size={30}/></Button>
                </div>
                <div className={styles["buttons-container"]}>
                    <Button which="IconFilledButton" onClick={()=>{}}><Github size={30}/></Button>
                    <Button which="IconFilledButton" onClick={()=>{}}><Linkedin size={30}/></Button>
                    <Button which="Secondary" onClick={()=>{}}>CV <Download size={30}/></Button>
                </div>
                <div className={styles["buttons-container"]}>
                    <Button which="CardButton" onClick={()=>{}}><ArrowUpRightCircle size={30}/></Button>
                    <Button which="CardButton" onClick={()=>{}}><Github size={30}/></Button>
                </div>
                <Button which="TextButton" onClick={()=>{}}>Text Button</Button>
                <h2>Form</h2>
                <InputComponent onChange={(value)=>handleInputChange("name", value)} type="text" name="name" label="Nombre" value={formState.name} placeholder="ej. Jhon Doe" required={true} missing={false}/>
                <InputComponent onChange={(value)=>handleInputChange("email", value)} type="text" name="email" label="E-Mail" value={formState.email} placeholder="ej. ejemplo@mail.com" required={true} missing={false}/>
                <InputComponent onChange={(value)=>handleInputChange("company", value)} type="text" name="company" label="Empresa" value={formState.company} placeholder="ej. MercadoLibre" required={true} missing={false}/>
                <TextArea onChange={(value)=>handleInputChange("message", value)} name="message" label="Mensaje" value={formState.message} placeholder="Hola Thiago, queremos contratarte!" required={true} missing={false}/>
                <Button which="Main" onClick={handleClick} submitting={submitted}>{submitted ? <CircularProgress color="inherit" size={30}/> : <>Enviar <Send size={30}/></>}</Button>
                <h2>Projects</h2>
                <div className={styles["cards-container"]}>
                    <ProjectCard
                        title="Piedra Papel o Tijera"
                        description="Un piedra papel o tijera online para jugar con tus amigos en tiempo real."
                        githubUrl="https://github.com/thiagoSalaberry/ppt-online"
                        pageUrl="https://ppt-online-react.vercel.app/"
                        techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="firebase"/>]}
                    />
                    <ProjectCard
                        title="Pet Finder"
                        description="Una web para encontrar y reportar mascotas perdidas en cierta ubicación."
                        githubUrl=""
                        pageUrl=""
                        techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="postgresql"/>]}
                    />
                    <ProjectCard
                        title="E-Commerce"
                        description="Un comercio electrónico para publicar productos y comprar a través de MercadoPago."
                        githubUrl="https://github.com/thiagoSalaberry/frontend"
                        pageUrl="https://frontend-seven-blond.vercel.app/"
                        techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="firebase"/>]}
                    />
                    <ProjectCard
                        title="Landing Page"
                        description="Una web para facilitar la reservación de turnos de tatuajes."
                        githubUrl="https://github.com/thiagoSalaberry/landing-page"
                        pageUrl="https://landing-page-zeta-mauve.vercel.app/"
                        techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="styled-components"/>]}
                    />
                </div>
                <h2>Techs</h2>
                <div className={styles["techs-container"]}>
                    <TechCard tech="React" image="react"/>
                    <TechCard tech="Next JS" image="next"/>
                    <TechCard tech="TypeScript" image="typescript"/>
                    <TechCard tech="Express JS" image="express"/>
                    <TechCard tech="Node JS" image="nodejs"/>
                    <TechCard tech="Git" image="git"/>
                    <TechCard tech="GitHub" image="github"/>
                    <TechCard tech="Postman" image="postman"/>
                    <TechCard tech="PostgreSQL" image="postgresql"/>
                    <TechCard tech="Firebase" image="firebase"/>
                    <TechCard tech="HTML" image="html"/>
                    <TechCard tech="CSS" image="css"/>
                    <TechCard tech="JavaScript" image="javascript"/>
                </div> */}
                <Boxes/>
            </main>
        </Layout>
    )
  }
  