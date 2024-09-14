import { useState } from "react";
import styles from "./styles.module.css";
import { InputProps } from "@/lib/types";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import translation from "@/lib/translation.json"
import { useRecoilValue } from "recoil";
import { languageAtom } from "@/lib/atoms";
export function Input(props:InputProps) {
    const language = useRecoilValue(languageAtom)
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
                    >{props.label}<span className={styles.error_message}>{props.missing && translation[language].contact_section.form_error_message}</span></label>
                )}
                <input
                    type={props.type}
                    name={props.name}
                    id={props.id || ""}
                    value={props.value}
                    placeholder={props.missing ? `${translation[language].contact_section.form_error_message}: ${props.placeholder}` : props.placeholder}
                    disabled={props.disabled}
                    required={props.required}
                    className={`
                        ${styles.input}
                        ${poppins.className}
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
                        