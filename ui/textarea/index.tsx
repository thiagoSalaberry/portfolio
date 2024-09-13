import { useState } from "react";
import styles from "./styles.module.css";
import { TextareaProps } from "@/lib/types";
import { bigShouldersDisplay, poppins } from "@/lib/fonts";
import translation from "@/lib/translation.json"
import { useRecoilValue } from "recoil";
import { languageAtom } from "@/lib/atoms";

export function Textarea(props:TextareaProps) {
    const language = useRecoilValue(languageAtom)
    const [focusing, setFocusing] = useState<boolean>(false);
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
        const value:string = e.target.value;
        props.onChange(value);
    };
    const handleClear = () => {
        props.onChange("");
    };
    return (
        // <div className={styles.wrapper}>
            <div className={styles.textarea_container}>
                {props.label && (
                    <label
                        htmlFor={props.name}
                        className={`${styles.label} ${bigShouldersDisplay.className}`}
                    >{props.label}<span className={styles.error_message}>{props.missing && translation[language].contact_section.form_error_message}</span></label>
                )}
                <textarea
                    name={props.name}
                    id={props.id || ""}
                    value={props.value}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    required={props.required}
                    className={`
                        ${styles.textarea}
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
                        