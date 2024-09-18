import { poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { ContactForm } from "@/components/contact-form";
import { Copy, CopyCheck } from "lucide-react";
import copy from "copy-to-clipboard";
import { useState } from "react";

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
        <>
            {opened ? (
                <div className={`${styles.contact_container} ${styles.opened}`}>
                    <p className={`${styles.contact_desc} ${poppins.className}`}>Completá el formulario o enviame un mail a la siguiente dirección</p>
                    <b onClick={handleCopy} className={`${styles.mail} ${poppins.className}`}>
                        thiagosalaberry99@gmail.com
                        {copied ? <CopyCheck size={20}/> : <Copy size={20}/>}
                    </b>
                    <ContactForm language="es"/>
                </div>
            ) : (
                <div className={styles.contact_container}>
                    <button onClick={handleCopy} className={`${styles.mail} ${poppins.className}`}>
                        thiagosalaberry99@gmail.com
                        {copied ? <CopyCheck size={20}/> : <Copy size={20}/>}
                    </button>
                </div>
            )}
        </>
    )
}