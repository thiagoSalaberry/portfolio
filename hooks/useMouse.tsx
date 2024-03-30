import React, { useEffect, useState } from "react";

export function useMouse() {
    const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({
        x: null,
        y: null
    });
    useEffect(()=>{
        const handleMouseMove = (e:MouseEvent) => {
            const target = e.target as HTMLElement;
            const rect = target.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - Math.floor(rect.left), 
                y: e.clientY - Math.floor(rect.top)
            })
        }
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    })
    return mousePosition;
}