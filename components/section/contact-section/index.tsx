import { poppins } from "@/lib/fonts";
import styles from "./styles.module.css";
import { ContactForm } from "@/components/contact-form";

export function ContactSection({opened}: {opened:boolean}) {
    return (
        <>
            {opened && (
                <div className={styles.contact_container}>
                    <p className={`${styles.contact_desc} ${poppins.className}`}>Completá el formulario o enviame un mail a la siguiente dirección</p>
                    <b className={`${styles.mail} ${poppins.className}`}>thiagosalaberry99@gmail.com</b>
                    <ContactForm language="es"/>
                </div>
            )}
        </>
    )
}