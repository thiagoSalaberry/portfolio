import { useState } from "react";
import styles from "./styles.module.css";
import { InputProps } from "@/lib/types";
import { bigShouldersDisplay } from "@/lib/fonts";

export function Input(props:InputProps) {
    const [focusing, setFocusing] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const value:string = e.target.value;
        props.onChange(value);
    };
    const handleClear = () => {
        props.onChange("");
    };
    const handleTypeChange = () => {
        setShowPassword(!showPassword)
    }
    return (
        // <div className={styles.wrapper}>
            <div className={styles.input_container}>
                {props.label && (
                    <label
                        htmlFor={props.name}
                        className={`${styles.label} ${bigShouldersDisplay.className}`}
                    >{props.label}<span className={styles.error_message}>{props.missing && "Completá este campo"}</span></label>
                )}
                <input
                    type={props.type}
                    name={props.name}
                    id={props.id || ""}
                    value={props.value}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    required={props.required}
                    className={`
                        ${styles.input}
                        ${bigShouldersDisplay.className}
                        ${props.value && styles.valued}
                        ${props.missing && styles.missing}
                        ${props.disabled && styles.disabled}
                        ${focusing && styles.focusing}
                    `}
                    onChange={handleChange}
                    onFocus={()=>setFocusing(true)}
                    onBlur={()=>setFocusing(false)}
                />
            </div>
        // </div>
    );
};
                        