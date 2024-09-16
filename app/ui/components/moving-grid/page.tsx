"use client";
import { Button } from "@/ui";
import styles from "./styles.module.css";
import { useState } from "react";


export default function Page() {
    const [selected, setSelected] = useState<number | null>(null);
    const handleSelect = (index:number):void => {
        setSelected(prev => prev == index ? null: index);
    }
    return (
        <div className={styles.page}>
            <div className={`${styles.container} ${selected && styles.selected}`}>
                <Box cell="uno" selected={selected == 0} unselected={selected !== null && selected != 0} onSelect={()=>handleSelect(0)}/>
                <Box cell="dos" selected={selected == 1} unselected={selected !== null && selected != 1} onSelect={()=>handleSelect(1)}/>
                <Box cell="tres" selected={selected == 2} unselected={selected !== null && selected != 2} onSelect={()=>handleSelect(2)}/>
                <Box cell="cuatro" selected={selected == 3} unselected={selected !== null && selected != 3} onSelect={()=>handleSelect(3)}/>
                <Box cell="cinco" selected={selected == 4} unselected={selected !== null && selected != 4} onSelect={()=>handleSelect(4)}/>
            </div>
        </div>
    )
};

function Box({selected, unselected, cell, onSelect}: {selected:boolean, unselected:boolean, cell:string, onSelect():void}) {
    return <div onClick={onSelect} className={`${styles.box} ${styles[cell]} ${selected && styles.selected} ${unselected && styles.unselected}`}/>
}