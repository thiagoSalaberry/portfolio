import styled from "styled-components";
import Link from "next/link";
import { Github, ArrowUpRightCircle } from "react-bootstrap-icons";
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
`
export default function Navigation(props:NavigationProps) {
    switch (props.icon) {
        case "github" : 
            return (
                <NavigationStyled href={props.href} target="_BLANK">
                    <Github size={30}/>
                </NavigationStyled>
            );
        case "arrow" : 
        return (
            <NavigationStyled href={props.href} target="_BLANK">
                <ArrowUpRightCircle size={30}/>
            </NavigationStyled>
        );
    };
};