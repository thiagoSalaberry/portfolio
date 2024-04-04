import styled from "styled-components";

export const TextAreaStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    .textarea-label{
        color: #151515;
        letter-spacing: 2px;
        font-size: 16px;
        font-family: "Poppins";
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }
    .error-message {
        color: var(--red);
    }
    .textarea{
        width: 100%;
        min-height: 300px;
        border-radius: 5px;
        padding: 10px;
        background: var(--background);
        border: 3px solid var(--grey-300);
        box-shadow: 0 3px 0 0 var(--grey);
        font-size: 20px;
        font-family: "Poppins";
        font-weight: bold;
        color: var(--blue);
        transition: all .1s ease;
    }
    .textarea:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 0 0 var(--grey);
    }
    .textarea:focus {
        outline: none;
        border: 3px solid var(--blue);
        box-shadow: 0 6px 0 0 var(--blue-700);
        transform: translateY(-3px);
    }
    .textarea::placeholder {
        color: var(--grey-300);
        font-weight: 500;
    }
    .valued {
        border: 3px solid var(--blue);
        box-shadow: 0 3px 0 0 var(--blue-700);
    }
    .valued:hover {
        box-shadow: 0 6px 0 0 var(--blue-700);
    }
    .missing {
        border: 3px solid var(--red);
        box-shadow: 0 3px 0 0 var(--red-700);
    }
    .missing:hover {
        box-shadow: 0 6px 0 0 var(--red-700);
    }
    .missing:focus {
        outline: none;
        border: 3px solid var(--red);
        box-shadow: 0 6px 0 0 var(--red-700);
        transform: translateY(-3px);
    }
    .disabled {
        background: var(--blue-100);
        color: var(--blue-300);
    }
    .disabled:active, .disabled:hover {
        box-shadow: 0 3px 0 0 var(--blue-700);
        transform: none;
    }
`;

export default function TextArea(props:TextAreaProps) {
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        if(props.onChange) {
            props.onChange(inputValue);
        }
    };
    return (
        <TextAreaStyled>
            <label className={`textarea-label`} htmlFor={props.name}>{props.label}{props.missing ? <span className={`error-message`}>Completá este campo</span> : null}</label>
            <textarea
                className={`textarea ${props.value !== "" ? "valued" : ""} ${props.missing ? "missing" : ""} ${props.disabled ? "disabled" : ""}`}
                name={props.name}
                value={props.value}
                required
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={handleChange}
            />
        </TextAreaStyled>
    )
}