"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { Header, Section } from '@/components'
import { Button } from '@/ui';
import { Maximize2, Minimize2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { sections } from './sections';
import { useRecoilState, useRecoilValue } from 'recoil';
import { languageAtom, sectionAtom } from '@/lib/atoms';
import translation from "@/lib/translation.json";

export default function Page() {
  const gridRef = useRef<HTMLElement>(null);
  // const cellRefs = [...Array(5)].map(() => useRef<HTMLTableSectionElement>(null));
  const cellRefs = [...Array(5)].map(_ => React.createRef<HTMLTableSectionElement>());
  const [cellStyles, setCellStyles] = useState<{
    left:number,
    top:number,
    width:number,
    height:number,
  }[]>([])
  const [section, setSection] = useRecoilState(sectionAtom);
  const language = useRecoilValue(languageAtom);
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
    //@ts-ignore
    setSection(prev => prev == classMap[index as keyof typeof section] ? null : classMap[index as keyof typeof section]);
  };
  useEffect(()=>{
    updateCellStyles();
    window.addEventListener("resize", updateCellStyles);
    return () => window.removeEventListener("resize", updateCellStyles)
  }, []);
  useEffect(()=>{
    setSection(section)
  }, [section])
  const classMap = {
    0: "projects",
    1: "about_me",
    2: "techs",
    3: "contact",
  };
  return (
    <>
      <Header/>
      <main ref={gridRef} className={`${styles.main}`}>
        {cellRefs.map((cellRef, index) => {
          const cellNumber = `cell_${index + 1}`;
          return (
            <React.Fragment key={cellNumber}>
              <section
                className={`${styles.cell} ${styles[cellNumber]}`}
                ref={cellRef}
              ></section>
              <Section
                index={index}
                onClick={()=>handleSelect(index)}
                //@ts-ignore
                opened={section == classMap[index as keyof typeof section]}
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
                key={index}
              >{sections[index].content || "asd"}</Section>
            </React.Fragment>
          )
        })}
        {/* <section className={`${styles.cell} ${styles.cell_1}`}></section> */}
      </main>
    </>
  )
}