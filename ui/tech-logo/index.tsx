import { useState } from "react";
import styles from "./tech-logo.module.css";
export default function TechLogo(props:TechLogoProps) {
    const [hovered, setHovered] = useState(false);
    return <img src={`${props.tech}.png`} alt="tech.png" className={`${styles["img"]} ${hovered ? styles["hovered"] : ""}`} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}/>
}