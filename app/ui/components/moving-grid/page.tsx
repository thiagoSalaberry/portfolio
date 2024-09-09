"use client";
import { Button } from "@/ui";
import styles from "./styles.module.css";
import { useState } from "react";


export default function Page() {
    const [opened, setOpened] = useState<boolean>(false);
    const imageMap = {
        0: "react",
        1: "next",
        2: "bash",
        3: "postman",
        4: "git",
        5: "github",
        6: "postgresql",
        7: "figma",
        8: "python"
    }
    // 0 1 2
    // 3 4 5
    // 6 7 8
    return (
        <div className={styles.page}>
            <section className={styles.techs_section}>
                <h2 className={styles.title}>TECNOLOGÍAS</h2>
                <div className={styles.button_container}>
                    <Button variant="main" onClick={()=>setOpened(!opened)}>Expandir</Button>
                </div>
                <div className={`${styles.grid} ${!opened && styles.hidden}`}>
                    {[...Array(9)].map((_, i) => {
                        return (
                            <div className={styles.column} key={i}>
                                <div className={styles.column_slider}>
                                    {[...Array(3)].map((_, j) => {
                                        // Acá necesito del 0 al 8 considerando que j == 0 | 1 | 2;
                                        const index = (i % 3) * 3 + j;
                                        return <Box key={j}><img src={`/${imageMap[index as keyof typeof imageMap]}.png`} alt=""/></Box>
                                    })}
                                </div>
                                <div className={styles.column_slider}>
                                    {[...Array(3)].map((_, j) => {
                                        // Acá necesito del 0 al 8 considerando que j == 0 | 1 | 2;
                                        const index = (i % 3) * 3 + j;
                                        return <Box key={j}><img src={`/${imageMap[index as keyof typeof imageMap]}.png`} alt=""/></Box>
                                    })}
                                </div>
                                <div className={styles.column_slider}>
                                    {[...Array(3)].map((_, j) => {
                                        // Acá necesito del 0 al 8 considerando que j == 0 | 1 | 2;
                                        const index = (i % 3) * 3 + j;
                                        return <Box key={j}><img src={`/${imageMap[index as keyof typeof imageMap]}.png`} alt=""/></Box>
                                    })}
                                </div>
                                <div className={styles.column_slider}>
                                    {[...Array(3)].map((_, j) => {
                                        // Acá necesito del 0 al 8 considerando que j == 0 | 1 | 2;
                                        const index = (i % 3) * 3 + j;
                                        return <Box key={j}><img src={`/${imageMap[index as keyof typeof imageMap]}.png`} alt=""/></Box>
                                    })}
                                </div>
                                <div className={styles.column_slider}>
                                    {[...Array(3)].map((_, j) => {
                                        // Acá necesito del 0 al 8 considerando que j == 0 | 1 | 2;
                                        const index = (i % 3) * 3 + j;
                                        return <Box key={j}><img src={`/${imageMap[index as keyof typeof imageMap]}.png`} alt=""/></Box>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className={`${styles.abierto} ${opened && styles.hidden}`}>Abrido</p>
            </section>
        </div>
    )
};

function Box({children}: {children:React.ReactNode}) {
    return <div className={styles.box}>{children}</div>
}