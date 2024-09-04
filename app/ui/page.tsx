"use client";
import styles from "./styles.module.css";
import { Button } from "@/ui";
import { Paintbrush } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [disabled, setDisabled] = useState<boolean>(false);
    const handleDisable = () => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 2000);
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
        </div>
    )
};
                        