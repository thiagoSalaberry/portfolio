import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    .input-label{
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
    .input{
        width: 100%;
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
    .input:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 0 0 var(--grey);
    }
    .input:focus {
        outline: none;
        border: 3px solid var(--blue);
        box-shadow: 0 6px 0 0 var(--blue-700);
        transform: translateY(-3px);
    }
    .input::placeholder {
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
`;

export default function InputComponent(props:InputProps) {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if(props.onChange) {
            props.onChange(inputValue);
        }
    };
    return (
        <InputStyled>
            <label className={`input-label`} htmlFor={props.name}>{props.label}{props.missing ? <span className={`error-message`}>Completá este campo</span> : null}</label>
            <input
                className={`input ${props.value !== "" ? "valued" : ""} ${props.missing ? "missing" : ""}`}
                type={props.type}
                name={props.name}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                onChange={handleChange}
            />
        </InputStyled>
    )
}