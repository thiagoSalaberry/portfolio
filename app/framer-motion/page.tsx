// Tengo que obtener las referencias de las celdas fijas, on resize también
// Debo montar los contenidos con sus referencias
// Debo settear un seleccionado
// Tengo que obtener las referencias de las celdas fijas, on resize también
"use client";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/ui";
import { Maximize2, Minimize2 } from "lucide-react";
import { section } from "framer-motion/client";


export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cellRefs = [...Array(5)].map(()=>useRef<HTMLTableSectionElement>(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [cellStyles, setCellStyles] = useState<{left:number, top:number, width:number, height:number}[]>([]);

  const updateCellStyles = () => {
    const newStyles = cellRefs.map(cellRef => {
      const cell = cellRef.current;
      if(cell) {
        console.log(`${cell.innerHTML}: ${cell.offsetLeft} ${cell.offsetTop} ${cell.offsetWidth} ${cell.offsetHeight}`);
        
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = cell;
        return { left: offsetLeft, top: offsetTop, width: offsetWidth, height: offsetHeight };
      };
      return {};
    });
    setCellStyles(newStyles as typeof cellStyles);
  }
  const handleSectionClick = (index:number) => {
    setSelected(prev => prev == index ? null : index);
  }
  useEffect(()=>{
    updateCellStyles();
    window.addEventListener("resize", updateCellStyles);
    return () => window.removeEventListener("resize", updateCellStyles);
  }, []);
  const classMap = {
    1: "PROYECTOS",
    2: "SOBRE_MÍ",
    3: "TECNOLOGÍAS",
    4: "CONTACTO",
    5: "FILL",
  };
  return (
    <div className={styles.page}>
      <div ref={containerRef} className={styles.container}>
        {cellRefs.map((cellRef, index) => {
          const cellClass = classMap[index + 1 as keyof typeof classMap];
          return (
            <>
              <section
                key={index}
                className={`${styles.cell} ${styles[cellClass]}`}
                ref={cellRef}
              ></section>
              <div
                className={`${styles.inner_content} ${selected == index && styles.active}`}
                style={
                  selected == index
                    ? {
                      width: containerRef.current?.offsetWidth,
                      height: containerRef.current?.offsetHeight,
                      top: 0,
                      left: 0
                    } 
                    : {
                      width: cellStyles[index]?.width,
                      height: cellStyles[index]?.height,
                      top: cellStyles[index]?.top,
                      left: cellStyles[index]?.left
                    }
                }
              >
                {classMap[index + 1 as keyof typeof classMap]}
                <div className={styles.button_container}>
                  <Button variant="main_icon" onClick={()=>handleSectionClick(index)}>
                    {selected == index ? (
                      <Minimize2 size={20}/>
                    ) : (
                      <Maximize2 size={20}/>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}