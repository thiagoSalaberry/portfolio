"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components'
import { Button } from '@/ui';
import { Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState<1 | 2 | 3 | 4 | 5 | null>(null);
  const handleSelect = (id: keyof typeof selected):void => {
    if(selected == id) return setSelected(null);
    setSelected(id);
  }
  return (
    <>
      <Header/>
      <main className={`${styles.main} ${selected && styles.complete}`}>
        {/* TEST */}
          {sections.map(section => {
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
          })}
        {/* TEST */}
      </main>
    </>
  )
}
// TEST
const sections = [
  {
    id: 1,
    title: 'PROJECTS',
  },
  {
    id: 2,
    title: 'ABOUT ME',
  },
  {
    id: 3,
    title: 'TECHNOLOGIES',
  },
  {
    id: 4,
    title: 'CONTACT',
  },
  {
    id: 5,
    title: 'FILL',
  },
]
// TEST