"use client";
import styles from "./styles.module.css";
import { Button, Input, Textarea } from "@/ui";
import { Paintbrush } from "lucide-react";
import { useState } from "react";

function useTestForm() {
    const [form, setForm] = useState<{
        name: string;
        email: string;
        company: string;
        message: string;
    }>({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [missing, setMissing] = useState<{
        name: boolean;
        email: boolean;
        company: boolean;
        message: boolean;
    }>({
        name: false,
        email: false,
        company: false,
        message: false,
    })
    return {form, setForm, missing, setMissing}
};

export default function Page() {
    const [disabled, setDisabled] = useState<boolean>(false);
    const {form, setForm, missing, setMissing} = useTestForm();
    const handleDisable = () => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 2000);
    };
    const handleChange = (fieldName: keyof typeof form, value:string):void => {
        setForm({
            ...form,
            [fieldName]: value
        });
        setMissing({
            ...missing,
            [fieldName]: false
        })
    };
    const handleInvalid = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        const inputName = (e.target as HTMLInputElement).name as keyof typeof missing;
        setMissing({
            ...missing,
            [inputName]: true
        });
    };
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <Button disabled={disabled} variant="main" onClick={handleDisable}>Disable all</Button>
                <Button disabled={disabled} variant="main" onClick={()=>console.log("Main Button")}>Main Button</Button>
                <Button disabled={disabled} variant="mainIcon" onClick={()=>console.log("Main Icon Button")}>Main Icon <Paintbrush size={20}/></Button>
                <Button disabled={disabled} variant="secondary" onClick={()=>console.log("Secondary Button")}>Secondary Button</Button>
                <Button disabled={disabled} variant="secondaryIcon" onClick={()=>console.log("Main Button")}>Secondary Icon <Paintbrush size={20}/></Button>
                <Button disabled={disabled} variant="tertiary" onClick={()=>console.log("Main Button")}>Tertiary Button</Button>
                <Button disabled={disabled} variant="tertiaryIcon" onClick={()=>console.log("Main Button")}>Tertiary Icon <Paintbrush size={20}/></Button>
                <Button disabled={disabled} variant="main_icon" onClick={()=>console.log("S")}><Paintbrush size={20}/></Button>
                <Button disabled={disabled} variant="secondary_icon" onClick={()=>console.log("Main Button")}><Paintbrush size={20}/></Button>
                <Button disabled={disabled} variant="tertiary_icon" onClick={()=>console.log("Main Button")}><Paintbrush size={20}/></Button>
                <Button disabled={disabled} variant="text" onClick={()=>console.log("Main Button")}>Text Button</Button>
            </section>
            <section className={styles.section}>
                <form onInvalid={handleInvalid} onSubmit={handleSubmit}>
                    <Input
                        label="Nombre"
                        type="text"
                        name="name"
                        value={form.name}
                        disabled={disabled}
                        missing={missing.name}
                        required={true}
                        placeholder="ej. Thiago Salaberry"
                        onChange={(value) => handleChange("name", value)}
                    />
                    <Input
                        label="E-Mail"
                        type="email"
                        name="email"
                        value={form.email}
                        disabled={disabled}
                        missing={missing.email}
                        required={true}
                        placeholder="ej. ejemplo@gmail.com"
                        onChange={(value) => handleChange("email", value)}
                    />
                    <Input
                        label="Compañía"
                        type="text"
                        name="company"
                        value={form.company}
                        disabled={disabled}
                        missing={missing.company}
                        required={true}
                        placeholder="ej. Amazon"
                        onChange={(value) => handleChange("company", value)}
                    />
                    <Textarea
                        label="Mensaje"
                        name="message"
                        value={form.message}
                        disabled={disabled}
                        missing={missing.message}
                        required={true}
                        placeholder="ej. Thiago Salaberry"
                        onChange={(value) => handleChange("message", value)}
                    />
                    <Button type="submit" variant="main" onClick={()=>handleSubmit}>Enviar</Button>
                </form>
            </section>
            {/* <p>Name: {form.name} | E-Mail: {form.email} | Company: {form.company} | Message: {form.message}</p> */}
        </div>
    )
};
                        