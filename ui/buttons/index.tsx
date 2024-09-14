"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { useMouse } from "@/hooks/useMouse";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import { ButtonProps } from "@/lib/types";
import { Loading } from "@/components";

export function Button(props:ButtonProps) {
    const {x, y} = useMouse()
    const rippleButtonRef = useRef<HTMLButtonElement>(null)
    const handleClick = () => {
        if(props.variant !== "text") {
            const rippleSpan = document.createElement("span");
            rippleSpan.className = `${styles.ripple} ${props.variant.includes("tertiary") && styles.tertiary}`;
            rippleSpan.style.left = `${x - rippleButtonRef.current?.offsetLeft!}px`
            rippleSpan.style.top = `${y - rippleButtonRef.current?.offsetTop!}px`
            rippleButtonRef.current?.appendChild(rippleSpan)
            setTimeout(() => {
                rippleButtonRef.current?.removeChild(rippleSpan)
            }, 750);
        }
        props.onClick()
    }
    return (
        <button
            type={props.type || "button"}
            disabled={props.disabled}
            id={props.id || ""}
            onClick={handleClick}
            ref={rippleButtonRef}
            className={`
                ${styles.button}
                ${styles[props.variant]}
                ${props.disabled && styles.disabled}
                ${bigShouldersDisplay.className}
                ${props.variant.toLowerCase().includes("_") && styles.icon}
            `}
        >
            {props.submitting ? <Loading text={props.loadingText || ""}/> : props.children}
        </button>
    )
}