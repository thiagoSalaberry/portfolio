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
    setCellStyles(newStyles);
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
        {/* <section className={`${styles.cell} ${styles.PROYECTOS}`} ref={cellRefs[0]}></section>
        <section className={`${styles.cell} ${styles.SOBRE_MÍ}`} ref={cellRefs[1]}></section>
        <section className={`${styles.cell} ${styles.TECNOLOGÍAS}`} ref={cellRefs[2]}></section>
        <section className={`${styles.cell} ${styles.CONTACTO}`} ref={cellRefs[3]}></section>
        <section className={`${styles.cell} ${styles.FILL}`} ref={cellRefs[4]}></section>
        <div
          className={styles.inner_content}
          ref={cellRefs[0]}
          onClick={()=>setSelected(selected == 0 ? null : 0)}
          style={
            selected == 0 ? {
              top: 0,
              left: 0,
              width: containerRef.current?.offsetWidth,
              height: containerRef.current?.offsetHeight,
            } : {
              top: cellStyles[0]?.top,
              left: cellStyles[0]?.left,
              width: cellStyles[0]?.width,
              height: cellStyles[0]?.height,
            }
          }
        >PROYECTOS</div>
        <div
          className={styles.inner_content}
          ref={cellRefs[1]}
          onClick={()=>setSelected(selected == 1 ? null : 1)}
          style={
            selected == 1 ? {
              top: 0,
              left: 0,
              width: containerRef.current?.offsetWidth,
              height: containerRef.current?.offsetHeight,
            } : {
              top: cellStyles[1]?.top,
              left: cellStyles[1]?.left,
              width: cellStyles[1]?.width,
              height: cellStyles[1]?.height,
            }
          }
        >SOBRE MÍ</div>
        <div
          className={styles.inner_content}
          ref={cellRefs[2]}
          onClick={()=>setSelected(selected == 2 ? null : 2)}
          style={
            selected == 2 ? {
              top: 0,
              left: 0,
              width: containerRef.current?.offsetWidth,
              height: containerRef.current?.offsetHeight,
            } : {
              top: cellStyles[2]?.top,
              left: cellStyles[2]?.left,
              width: cellStyles[2]?.width,
              height: cellStyles[2]?.height,
            }
          }
        >TECNOLOGÍAS</div>
        <div
          className={styles.inner_content}
          ref={cellRefs[3]}
          onClick={()=>setSelected(selected == 3 ? null : 3)}
          style={
            selected == 3 ? {
              top: 0,
              left: 0,
              width: containerRef.current?.offsetWidth,
              height: containerRef.current?.offsetHeight,
            } : {
              top: cellStyles[3]?.top,
              left: cellStyles[3]?.left,
              width: cellStyles[3]?.width,
              height: cellStyles[3]?.height,
            }
          }
        >CONTACTO</div>
        <div
          className={styles.inner_content}
          ref={cellRefs[4]}
          onClick={()=>setSelected(selected == 4 ? null : 4)}
          style={
            selected == 4 ? {
              top: 0,
              left: 0,
              width: containerRef.current?.offsetWidth,
              height: containerRef.current?.offsetHeight,
            } : {
              top: cellStyles[4]?.top,
              left: cellStyles[4]?.left,
              width: cellStyles[4]?.width,
              height: cellStyles[4]?.height,
            }
          }
        >FILL</div> */}
        {cellRefs.map((cellRef, index) => {
          const cellClass = classMap[index + 1 as keyof typeof classMap];
          console.log(cellClass);
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