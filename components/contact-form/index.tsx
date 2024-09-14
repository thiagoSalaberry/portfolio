import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Input, Textarea } from "@/ui";
import { useContactForm } from "@/hooks/useContactForm";
import translation from "@/lib/translation.json";
import { poppins } from "@/lib/fonts";
import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm({language}: {language: "es" | "en"}) {7
    const [step, setStep] = useState<number>(0);
    const { form, setForm, disabled, setDisabled } = useContactForm();
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
            setDisabled(false);
            setStep(1)
        }, 2000);
        setTimeout(() => {
            setStep(0);
            setForm({
                name: {
                    value: "",
                    missing: false
                },
                email: {
                    value: "",
                    missing: false
                },
                company: {
                    value: "",
                    missing: false
                },
                message: {
                    value: "",
                    missing: false
                },
            })
        }, 10000);
    }
    return (
        <AnimatePresence>
            {step == 0 ? (
                <motion.form initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: .3}} className={`${styles.contact_form} ${poppins.className}`} onInvalid={handleInvalid} onSubmit={handleSubmit}>
                    <div className={styles.name_section}>
                        <Input
                            name="name"
                            type="text"
                            value={form.name.value}
                            placeholder={translation[language].contact_section.form_name}
                            disabled={disabled}
                            missing={form.name.missing}
                            onChange={(value:string) => handleChange("name", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.email_section}>
                        <Input
                            name="email"
                            type="email"
                            value={form.email.value}
                            placeholder={translation[language].contact_section.form_email}
                            disabled={disabled}
                            missing={form.email.missing}
                            onChange={(value:string) => handleChange("email", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.company_section}>
                        <Input
                            name="company"
                            type="text"
                            value={form.company.value}
                            placeholder={translation[language].contact_section.form_company}
                            disabled={disabled}
                            missing={form.company.missing}
                            onChange={(value:string) => handleChange("company", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.message_section}>
                        <Textarea
                            name="message"
                            value={form.message.value}
                            placeholder={translation[language].contact_section.form_message}
                            disabled={disabled}
                            missing={form.message.missing}
                            onChange={(value:string) => handleChange("message", value)}
                            required={true}
                        />
                    </div>
                    <div className={styles.submit_section}>
                        <Button disabled={disabled} type="submit" submitting={disabled} variant="mainIcon" onClick={()=>{}} loadingText="Enviando">{language == "es" ? "Enviar" : "Send"} <Send size={20}/></Button>
                    </div>
                    <div className={styles.form_image}>
                        <img src="/hello.png" alt="contact.png" />
                    </div>
                </motion.form>
            ) : (
                <div className={styles.success_container}>
                    <CheckCircle color="var(--green-600)" size={70}/>
                    <h3>{translation[language].contact_section.success_greeting} {form.name.value}</h3>
                    <p className={poppins.className}>
                        {translation[language].contact_section.success_message_1} <b>{form.email.value}</b> {translation[language].contact_section.success_message_2}
                    </p>
                </div>
            )}
        </AnimatePresence>
    );
};