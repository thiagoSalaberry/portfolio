"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { Header, Section } from '@/components'
import { Button } from '@/ui';
import { Maximize2, Minimize2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { sections } from './sections';

export default function Home() {
  const gridRef = useRef<HTMLElement>(null);
  const cellRefs = [...Array(5)].map(() => useRef<HTMLTableSectionElement>(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [cellStyles, setCellStyles] = useState<{
    left:number,
    top:number,
    width:number,
    height:number,
  }[]>([])
  const updateCellStyles =  () => {
    const newStyles = cellRefs.map(cellRef => {
     const cell = cellRef.current;
     if(cell) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = cell;
      return {left: offsetLeft, top: offsetTop, width: offsetWidth, height: offsetHeight };
     }
     return {}      
    });
    setCellStyles(newStyles as typeof cellStyles);
  }
  const handleSelect = (index: number):void => {
    setSelected(prev => prev == index ? null : index)
  };
  useEffect(()=>{
    updateCellStyles();
    window.addEventListener("resize", updateCellStyles);
    return () => window.removeEventListener("resize", updateCellStyles)
  }, []);
  const classMap = {
    0: "projects",
    1: "about_me",
    2: "techs",
    3: "contact",
    4: "fill",
  };
  return (
    <>
      <Header/>
      <main ref={gridRef} className={`${styles.main}`}>
        {/* TEST */}
          {/* {sections.map(section => {
            if(selected && selected !== section.id) return;
            return (
              <div
                key={section.id}
                id={section.id.toString()}
                className={`${styles.section_test} ${selected == section.id && styles.selected} ${selected && selected !== section.id && styles.unselected}`}
              >
                <h2 className={styles.title}>{section.title}</h2>
                <div className={styles.action_button}>
                  <Button variant='main_icon' onClick={()=>handleSelect(section.id as keyof typeof selected)}>
                    {selected == section.id ? <Minimize2 size={20}/> : <Maximize2 size={20}/>}
                  </Button>
                </div>
              </div>
            )
          })} */}
        {/* TEST */}
        {cellRefs.map((cellRef, index) => {
          // if(index > 0) return;
          const cellNumber = `cell_${index + 1}`;
          return (
            <>
              <section
                className={`${styles.cell} ${styles[cellNumber]}`}
                ref={cellRef}
                key={cellNumber}
              ></section>
              <Section
                index={index}
                onClick={()=>handleSelect(index)}
                opened={selected == index}
                title={sections[index].title}
                mainRef={gridRef}
                sectionRef={cellRef}
                style={{
                  top: cellStyles[index]?.top,
                  left: cellStyles[index]?.left,
                  width: cellStyles[index]?.width,
                  height: cellStyles[index]?.height
                }}
                expandable={index !== 4 && index !== 1}
                key={`${cellNumber}a sd`}
              >{sections[index].content || "asd"}</Section>
            </>
          )
        })}
        {/* <section className={`${styles.cell} ${styles.cell_1}`}></section> */}
      </main>
    </>
  )
}