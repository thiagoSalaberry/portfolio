"use client";
import styles from "./styles.module.css";
import { Header, Section, TechCard } from "@/components";
import react from "@/public/react.png";
export default function Page() {
    const imageMap = {
        0: "react.png",
        1: "next.png",
        2: "bash.png",
        3: "react.png",
        4: "next.png",
        5: "bash.png",
    }
    return (
        <div className={styles.page}>
            {/* <Header /> */}
            {/* <div className={styles.wrapper}>
                <div className={styles.small_cards_container}>
                    <TechCard size="small" title="React.js" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/react.png"/>
                    <TechCard size="small" title="Next.js" tag="React Framework" description="JavaScript library oriented to create solid user interfaces" img="/next.png"/>
                    <TechCard size="small" title="Bash" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/bash.png"/>
                    <TechCard size="small" title="React.js" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/react.png"/>
                    <TechCard size="small" title="Next.js" tag="React Framework" description="JavaScript library oriented to create solid user interfaces" img="/next.png"/>
                    <TechCard size="small" title="Bash" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/bash.png"/>
                    <TechCard size="small" title="React.js" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/react.png"/>
                    <TechCard size="small" title="Next.js" tag="React Framework" description="JavaScript library oriented to create solid user interfaces" img="/next.png"/>
                    <TechCard size="small" title="Bash" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/bash.png"/>
                </div>
            </div> */}
            {/* <div className={styles.large_cards_container}>
                <TechCard size="large" title="React.js" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/react.png"/>
                <TechCard size="large" title="React.js" tag="Frontend Framework" description="JavaScript library oriented to create solid user interfaces" img="/react.png"/>
            </div> */}
            {/* <div className={styles.logos}>
                {[...Array(2)].map((_, index) => {
                    return (
                        <div key={index} className={styles.logos_slide}>
                            {[...Array(6)].map((_, jindex) => {
                                return <img className={styles.logo_img} src={`/${imageMap[jindex] as keyof typeof imageMap}`} alt="react.png" />
                            })}
                        </div>
                    )
                })}
            </div> */}
            <div className={styles.contenedor_wrapper}>
                <div className={styles.column}> {/* LOGOS */}
                    <div className={styles.contenedor}> {/* LOGOS_SLIDE */}
                        <div className={styles.contenedor_image}>
                            <img src="/react.png" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className={styles.contenedor_image}> {/* LOGOS_IMAGE */}
                            <img src="/next.png" alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className={styles.contenedor_image}>
                            <img src="/bash.png" alt="" />
                            <p>Bash</p>
                        </div>
                    </div>
                    <div className={styles.contenedor}> {/* LOGOS_SLIDE */}
                        <div className={styles.contenedor_image}>
                            <img src="/react.png" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className={styles.contenedor_image}> {/* LOGOS_IMAGE */}
                            <img src="/next.png" alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className={styles.contenedor_image}>
                            <img src="/bash.png" alt="" />
                            <p>Bash</p>
                        </div>
                    </div>
                    <div className={styles.contenedor}> {/* LOGOS_SLIDE */}
                        <div className={styles.contenedor_image}>
                            <img src="/react.png" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className={styles.contenedor_image}> {/* LOGOS_IMAGE */}
                            <img src="/next.png" alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className={styles.contenedor_image}>
                            <img src="/bash.png" alt="" />
                            <p>Bash</p>
                        </div>
                    </div>
                </div>
                <div className={styles.column}> {/* LOGOS */}
                    <div className={styles.contenedor}> {/* LOGOS_SLIDE */}
                        <div className={styles.contenedor_image}>
                            <img src="/react.png" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className={styles.contenedor_image}> {/* LOGOS_IMAGE */}
                            <img src="/next.png" alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className={styles.contenedor_image}>
                            <img src="/bash.png" alt="" />
                            <p>Bash</p>
                        </div>
                    </div>
                    <div className={styles.contenedor}> {/* LOGOS_SLIDE */}
                        <div className={styles.contenedor_image}>
                            <img src="/react.png" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className={styles.contenedor_image}> {/* LOGOS_IMAGE */}
                            <img src="/next.png" alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className={styles.contenedor_image}>
                            <img src="/bash.png" alt="" />
                            <p>Bash</p>
                        </div>
                    </div>
                    <div className={styles.contenedor}> {/* LOGOS_SLIDE */}
                        <div className={styles.contenedor_image}>
                            <img src="/react.png" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className={styles.contenedor_image}> {/* LOGOS_IMAGE */}
                            <img src="/next.png" alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className={styles.contenedor_image}>
                            <img src="/bash.png" alt="" />
                            <p>Bash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
                        