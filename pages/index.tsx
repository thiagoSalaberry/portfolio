import styles from "./home.module.css";
import Layout from "@/components/layout";
import TechCard from "@/components/tech-card";
import ProjectCard from "@/components/project-card";
import TechLogo from "@/ui/tech-logo";
import Button from "@/ui/buttons";
import InputComponent from "@/ui/inputs";
import TextArea from "@/ui/text-area";
import { Send, Clipboard, Clipboard2Check, Github, Linkedin, Download } from "react-bootstrap-icons";
import Navigation from "@/ui/links";
export default function Home() {
  const scrollToSection = (section:string) => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return;
    sectionEl.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Layout >
      <section className={styles["welcome-section"]} id="welcome">
        <div className={styles["welcome-p-container"]}>
          <p className={styles["waving__animation"]}>🖐</p>
          <p className={styles["welcome__p"]}>, mi nombre es Thiago y soy</p>
        </div>
        <h1 className={styles["welcome__title"]}>Fullstack <span className={styles["welcome__title__span"]}>Developer</span></h1>
        <p className={styles["welcome__location"]}>Buenos Aires, <img src="arg.png"/></p>
        <img src="yo1.png" alt="yo.png" className={styles["welcome__pic"]}/>
        <div className={styles["welcome-buttons-container"]}>
          <Button which="Main" onClick={()=>{scrollToSection("projects")}}>Proyectos</Button>
          <Button which="Secondary" onClick={()=>{scrollToSection("contact")}}>Contacto</Button>
        </div>
      </section>
      <section className={styles["techs-section"]} id="techs">
        <h3 className={styles["section-title"]}>TECNOLOGÍAS</h3>
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
        </div>
      </section>
      <section className={styles["projects-section"]} id="projects">
        <h3 className={styles["section-title"]}>PROYECTOS</h3>
        <div className={styles["projects-container"]}>
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
      </section>
      <section className={styles["about__me-section"]} id="about__me">
        <h3 className={styles["section-title"]}>SOBRE MÍ</h3>
        <p className={styles["about__me-quote"]}>web <span>made</span> simple</p>
        <div className={styles["about__me-buttons-container"]}>
          <Navigation href="https://github.com/thiagoSalaberry" style="button" icon="github"/>
          <Navigation href="https://www.linkedin.com/in/thiago-salaberry/" style="button" icon="linkedin"/>
          <Button which="IconButton" onClick={()=>{}}>CV <Download size={30}/></Button>
        </div>
      </section>
      <section className={styles["contact-section"]} id="contact">
        <h3 className={styles["section-title"]}>CONTACTO</h3>
        <p>Completá el siguiente formulario o enviame un mail a la siguiente dirección:</p>
        <p className={styles["my__mail"]}>thiagosalaberry99@gmail.com <Clipboard size={20}/></p>
        <form className={styles["contact__form"]}>
          <InputComponent label="Nombre" type="text" name="name" value="" missing={false} disabled={false} onChange={()=>{}} placeholder="ej. Thiago Salaberry"/>
          <InputComponent label="E-Mail" type="email" name="email" value="" missing={false} disabled={false} onChange={()=>{}} placeholder="ej. ejemplo@tumail.com"/>
          <InputComponent label="Empresa" type="text" name="company" value="" missing={false} disabled={false} onChange={()=>{}} placeholder="ej. MercadoLibre"/>
          <TextArea label="Mensaje" name="message" missing={false} value="" placeholder="Hola Thiago, queremos contratarte!"/>
          <Button which="Main" onClick={()=>{}}>Enviar <Send size={30}/></Button>
        </form>
      </section>
    </Layout>
  )
}
