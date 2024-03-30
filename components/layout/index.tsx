import { useState } from "react"
import styles from "./layout.module.css";
import Header from "../header";
import { Footer } from "../footer";
export default function Layout(props:LayoutProps) {
    return (
        <div>
            <Header />
            <>{props.children}</>
            <Footer>Thiago Salaberry | 2024</Footer>
        </div>
    )
}