import { CardButton } from "../../ui/buttons";
import { Github, ArrowUpRightCircle, Box } from "react-bootstrap-icons";
import styles from "./tech-card.module.css";
import TechLogo from "../../ui/tech-logo";
import Navigation from "@/ui/links";
import { useEffect, useRef, useState } from "react";
import Router from "next/router";
export default function TechCard(props:TechCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    useEffect(()=>{
        if(!containerRef.current) return;
        const container = containerRef.current;
        const handleMouseMove = (e:MouseEvent) => {
            const rect = container.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - Math.floor(rect.left),
                y: e.clientY - Math.floor(rect.top)
            })
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    })
    useEffect(()=>{
        if (!backgroundRef.current) return;
        const background = backgroundRef.current;
        background.style.left = `${mousePosition.x}px`;
        background.style.top = `${mousePosition.y}px`;
    }, [mousePosition]);
    return (
        <div
            className={styles["tech__card__container"]}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={containerRef}
        >
            <img
                src={`${props.image}.png`}
                alt="tech.png"
                className={`${styles["tech__card__image"]} ${hovered ? styles["hovered"] : ""}`}
            />
            <p className={styles["tech__card__title"]}>{props.tech}</p>
            <div
                className={`${styles["tech__card__background"]} ${!hovered ? styles["off"] : ""} ${styles[props.image]}`}
                ref={backgroundRef}
            ></div>
        </div>
    );
};