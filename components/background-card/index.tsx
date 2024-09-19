import styles from "./background-card.module.css";
import { useEffect, useRef, useState } from "react";
export default function BackgroundCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
    useEffect(() => {
        if (!containerRef.current) return;
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
    });
    useEffect(()=>{
        if(!boxRef.current) return;
        const box = boxRef.current;
        box.style.left = `${mousePosition.x}px`;
        box.style.top = `${mousePosition.y}px`;
    }, [mousePosition])
    return (
        <>
            <div className={styles["container"]} ref={containerRef} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>setHovered(false)}>
                <p className={styles["title"]}>Título de la card</p>
                <p className={styles["desc"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus amet tempora veniam mollitia magni asperiores fugiat enim dolor, optio earum fugit quam distinctio, maxime corrupti omnis consequuntur reiciendis. Dicta!</p>
                <p className={styles["price"]}>$1500</p>
                <div className={`${styles["box"]} ${!hovered ? styles["off"] : ""}`} ref={boxRef}></div>
            </div>
        </>
    );
};