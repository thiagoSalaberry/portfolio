import styles from "./home.module.css";
import Layout from "@/components/layout";
import TechCard from "@/components/tech-card";
import ProjectCard from "@/components/project-card";
import TechLogo from "@/ui/tech-logo";
import Button from "@/ui/buttons";
import { TextButton } from "@/ui/buttons";
import InputComponent from "@/ui/inputs";
import TextArea from "@/ui/text-area";
import { Send, Clipboard, ClipboardCheck, Github, Linkedin, Download } from "react-bootstrap-icons";
import Navigation from "@/ui/links";
import { useState } from "react";
import translation from "@/lib/translation.json";
import { useRecoilValue } from "recoil";
import { languajeState } from "@/atoms/languageState";
import copy from "copy-to-clipboard";
export default function Home() {
  const [copied, setCopied] = useState(false);
  const language = useRecoilValue(languajeState);
  const handleCopy = () => {
    setCopied(true);
    copy("thiagosalaberry99@gmail.com");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  const scrollToSection = (section:string) => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return;
    sectionEl.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Layout >
      <section className={styles["welcome-section"]} id="welcome">
        <div className={styles["welcome-p-container"]}>
          <p className={styles["waving__animation"]}>🖐</p>
          <p className={styles["welcome__p"]}>, {translation[language].hero_section.heading_quote}</p>
        </div>
        <h1 className={styles["welcome__title"]}>Fullstack <span className={styles["welcome__title__span"]}>Developer</span></h1>
        <p className={styles["welcome__location"]}>Buenos Aires, <img src="arg.png"/></p>
        <img src="yo1.png" alt="yo.png" className={styles["welcome__pic"]}/>
        <div className={styles["welcome-buttons-container"]}>
          <Button which="Main" onClick={()=>{scrollToSection("projects")}}>{translation[language].hero_section.main_button}</Button>
          <Button which="Secondary" onClick={()=>{scrollToSection("contact")}}>{translation[language].hero_section.secondary_button}</Button>
        </div>
      </section>
      <section className={styles["techs-section"]} id="techs">
        <h3 className={styles["section-title"]}>{translation[language].techs_section.title}</h3>
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
        <h3 className={styles["section-title"]}>{translation[language].projects_section.title}</h3>
        <div className={styles["projects-container"]}>
          <ProjectCard
              title={translation[language].projects_section.card_1.title}
              description={translation[language].projects_section.card_1.desc}
              githubUrl="https://github.com/thiagoSalaberry/frontend"
              pageUrl="https://frontend-seven-blond.vercel.app/"
              techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="firebase"/>]}
          />
          <ProjectCard
              title={translation[language].projects_section.card_2.title}
              description={translation[language].projects_section.card_2.desc}
              githubUrl="https://github.com/thiagoSalaberry/landing-page"
              pageUrl="https://landing-page-zeta-mauve.vercel.app/"
              techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="styled-components"/>]}
          />
          <ProjectCard
              title={translation[language].projects_section.card_3.title}
              description={translation[language].projects_section.card_3.desc}
              githubUrl="https://github.com/thiagoSalaberry/ppt-online"
              pageUrl="https://ppt-online-react.vercel.app/"              
              techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="firebase"/>]}
          />
          <ProjectCard
              title={translation[language].projects_section.card_4.title}
              description={translation[language].projects_section.card_4.desc}
              githubUrl=""
              pageUrl=""
              techList={[<TechLogo tech="react"/>, <TechLogo tech="next"/>, <TechLogo tech="typescript"/>, <TechLogo tech="postgresql"/>]}
          />
        </div>
      </section>
      <section className={styles["about__me-section"]} id="about__me">
        <h3 className={styles["section-title"]}>{translation[language].about_me_section.title}</h3>
        <div className={styles["about__me-content"]}>
          <p className={styles["about__me-quote"]}>web <span>made</span> simple</p>
          <div className={styles["about__me-buttons-container"]}>
            <Navigation href="https://github.com/thiagoSalaberry" style="button" icon="github"/>
            <Navigation href="https://www.linkedin.com/in/thiago-salaberry/" style="button" icon="linkedin"/>
            <Button which="IconButton" onClick={()=>{}}>CV <Download size={30}/></Button>
          </div>
        </div>
        <img src="3.png" alt="me.png" className={styles["about__me-img"]}/>
      </section>
      <section className={styles["contact-section"]} id="contact">
        <h3 className={styles["section-title"]}>{translation[language].contact_section.title}</h3>
        <p>{translation[language].contact_section.contact_section_quote}</p>
        <p className={styles["my__mail"]} onClick={handleCopy}>thiagosalaberry99@gmail.com {copied ? <ClipboardCheck size={20}/> : <Clipboard size={20}/>}</p>
        <form className={styles["contact__form"]}>
          <InputComponent label={translation[language].contact_section.form_name} type="text" name="name" value="" missing={false} disabled={false} onChange={()=>{}} placeholder={translation[language].contact_section.form_name_placeholder}/>
          <InputComponent label={translation[language].contact_section.form_email} type="email" name="email" value="" missing={false} disabled={false} onChange={()=>{}} placeholder={translation[language].contact_section.form_email_placeholder}/>
          <InputComponent label={translation[language].contact_section.form_company} type="text" name="company" value="" missing={false} disabled={false} onChange={()=>{}} placeholder={translation[language].contact_section.form_company_placeholder}/>
          <TextArea label={translation[language].contact_section.form_message} name="message" missing={false} value="" placeholder={translation[language].contact_section.form_message_placeholder}/>
          <Button which="Main" onClick={()=>{}}>{translation[language].contact_section.form_send} <Send size={30}/></Button>
        </form>
      </section>
    </Layout>
  )
}