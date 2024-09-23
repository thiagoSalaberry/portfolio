import { poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { ContactForm } from "@/components/contact-form";
import { Copy, CopyCheck, Linkedin } from "lucide-react";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { Navigation } from "@/ui";
import { Github } from "react-bootstrap-icons";
import translation from "@/lib/translation.json"

export function ContactSection({opened, language}: {opened:boolean, language: "es" | "en"}) {
    const [copied, setCopied] = useState<boolean>(false)
    const handleCopy = () => {
        copy("thiagosalaberry99@gmail.com")
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }
    return (
        <div className={`${styles.contact_container} ${opened && styles.opened}`}>
            <p className={`${styles.contact_desc} ${poppins.className}`}>{translation[language].contact_section.contact_section_quote}</p>
            <button onClick={handleCopy} className={`${styles.mail} ${poppins.className}`}>
                thiagosalaberry99@gmail.com
                {copied ? <CopyCheck size={20}/> : <Copy size={20}/>}
            </button>
            {opened && <ContactForm language={language}/>}
            <div className={styles.contact_links_container}>
                <Navigation href="https://www.linkedin.com/in/thiago-salaberry/"><Linkedin size={24}/> LinkedIn</Navigation>
                <Navigation href="https://github.com/thiagoSalaberry"><Github size={24}/> GitHub</Navigation>
            </div>
        </div>
    )
}
