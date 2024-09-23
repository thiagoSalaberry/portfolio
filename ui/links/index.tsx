import styled from "styled-components";
import Link from "next/link";
import { Github, ArrowUpRightCircle, Linkedin } from "react-bootstrap-icons";
export const NavigationStyled = styled(Link)`
    border: none;
    background: none;
    color: var(--blue);
    cursor: pointer;
    transition: all .1s ease;
    text-decoration: none;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
`;
export const NavigationButtonStyled = styled(Link)`
    background: var(--blue);
    display: flex;
    gap: 5px;
    padding: 10px 20px;
    font-size: 20px;
    color: white;
    font-family: "Poppins";
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 3px 0 0 var(--blue-700);
    transition: all .1s ease;
    cursor: pointer;
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 0 0 var(--blue-700);
    }
    &:active {
        transform: translateY(3px);
        box-shadow: none;
    };
    padding: 13px;
    border-radius: 10px;
`;
export default function Navigation(props:NavigationProps) {
    switch (props.icon && props.style) {
        case "button" : 
            return (
                <NavigationButtonStyled href={props.href} target="_BLANK">
                    {props.icon == "github" ? <Github size={30}/> : props.icon == "arrow" ? <ArrowUpRightCircle size={30}/> : <Linkedin size={30}/>}
                </NavigationButtonStyled>
            );
        case "card" : 
        return (
            <NavigationStyled href={props.href} target="_BLANK">
                {props.icon == "github" ? <Github size={30}/> : props.icon == "arrow" ? <ArrowUpRightCircle size={30}/> : <Linkedin size={30}/>}
            </NavigationStyled>
        );
    };
};