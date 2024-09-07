"use client";
import { Ref, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { motion, useTransform, useMotionValue, MotionProps } from "framer-motion";

export default function Page() {
    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const fourthRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null); 
    const refMap = {
      0: firstRef,
      1: secondRef,
      2: thirdRef,
      3: fourthRef
    }
    const [position, setPosition] = useState<{left:number; top:number; width: number; height:number}[]>([])
    const [selected, setSelected] = useState<number | null>(null);
    const handleSelect = (id:number) => {
      if(selected == id) return setSelected(null);
      setSelected(id);
      const current = containerRef.current;
      if(current) {
        setPosition([{left: current.offsetLeft, top: current.offsetTop, width: current.offsetWidth, height: current.offsetHeight}])
      }
    };
    const updatePosition = () => {
      const newPositions = Object.values(refMap).map(ref => {
        const current = ref.current;
        if(current) {
          const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = current;
          return {left: offsetLeft, top: offsetTop, width: offsetWidth, height: offsetHeight}
        }
        return {left: 0, top: 0, width: 0, height: 0};
      })
      setPosition(newPositions);
    };
    useEffect(()=>{
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }, [])
    return (
        <div className={styles.page}>
          <div ref={containerRef} className={styles.container}>
            <div ref={firstRef} id="1" className={styles.section}></div>
            <div ref={secondRef} id="2" className={styles.section}></div>
            <div ref={thirdRef} id="3" className={styles.section}></div>
            <div ref={fourthRef} id="4" className={styles.section}></div>
            
            {position.map((pos, index) => {
                return (
                  <Box
                    key={boxes[index].id}
                    onClick={()=>handleSelect(index + 1)}
                    left={pos.left}
                    top={pos.top}
                    width={pos.width}
                    height={pos.height}
                  >{boxes[index].title}</Box>
                )
            })}
          </div>
        </div>
    )
};
type BoxProps = {
  children: React.ReactNode,
  onClick: () => void,
  left: number;
  top: number;
  width: number;
  height: number
} & MotionProps;
function Box(props:BoxProps) {
  return (
    <motion.div
      onClick={props.onClick}
      className={styles.box}
      initial={{
        left: props.left,
        top: props.top,
        width: props.width,
        height: props.height
      }}
      animate={{

      }}
    >
      {props.children}
    </motion.div>
  )
}

const boxes = [
  {
    id: 1,
    title: "Caja 1"
  },
  {
    id: 2,
    title: "Caja 2"
  },
  {
    id: 3,
    title: "Caja 3"
  },
  {
    id: 4,
    title: "Caja 4"
  },
]