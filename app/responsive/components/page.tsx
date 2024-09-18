"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { Project } from "@/components";

export default function Page() {
    const [selected, setSelected] = useState<number | null>(1);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null : index);
    }
    return (
        <div className={styles.page}>
            <div className={styles.projects_container}>
                <Project
                    title="E-COMMERCE"
                    description="Un comercio electrónico para publicar productos y comprar a través de MercadoPago."
                    techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                    index={0}
                    language="es"
                    opened={false}
                    selected={selected == 0}
                    notSelected={selected != null && selected != 0}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(0)}
                />
                <Project
                    title="URL SHORTENER"
                    description="Una web para recortar URLs largos y hacerlos más legibles y cómodos."
                    techs={["React.js", "Next.js", "TypeScript", "PostgreSQL"]}
                    index={1}
                    language="es"
                    opened={false}
                    selected={selected == 1}
                    notSelected={selected != null && selected != 1}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(1)}
                />
                <Project
                    title="TEOXYS TATTOO"
                    description="Una web para facilitar la reservación de turnos de tatuajes."
                    techs={["React.js", "Next.js", "TypeScript", "Styled-Components"]}
                    index={2}
                    language="es"
                    opened={false}
                    selected={selected == 2}
                    notSelected={selected != null && selected != 2}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(2)}
                />
                <Project
                    title="PIEDRA PAPEL Ó TIJERA"
                    description="Un piedra papel o tijera online para jugar con tus amigos en tiempo real."
                    techs={["React.js", "Next.js", "TypeScript", "Firebase"]}
                    index={3}
                    language="es"
                    opened={false}
                    selected={selected == 3}
                    notSelected={selected != null && selected != 3}
                    githubLink=""
                    link=""
                    onSelect={()=>handleSelect(3)}
                />
            </div>
        </div>
    )
};
                        