import { useEffect, useState } from "react";
import styled from "styled-components";
export const Main = styled.button`
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
    }
`;

export const Secondary = styled(Main)`
    background: var(--background);
    color: var(--blue);
    border: 3px solid var(--blue);
`;

export const TextButton = styled(Secondary)`
    background: none;
    border: none;
    box-shadow: none;
    padding: 0;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    border-radius: 0;
    overflow: hidden;
    &:hover {
        transform: none;
        box-shadow: none;
    }
    &::after {
        content: "";
        width: 100%;
        height: 3px;
        background: var(--blue);
        transform: translateY(300%);
        transition: all .1s ease;
    }
    &:hover::after {
        transform: translateY(0%);
    }
    &:active {
        transform: scale(.97);
    }
`;

export const IconFilledButton = styled(Main)`
    padding: 13px;
    border-radius: 10px;
`;

export const IconButton = styled(IconFilledButton)`
    padding: 10px;
    background: var(--background);
    color: var(--blue);
    border: 3px solid var(--blue);
`;
export const CardButton = styled.button`
    border: none;
    background: none;
    color: var(--blue);
    cursor: pointer;
    transition: all .1s ease;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
`
export default function Button(props:ButtonProps) {
    switch(props.which) {
        case "Main" : 
            return <Main onClick={props.onClick}>{props.children}</Main>;
        case "Secondary" :
            return <Secondary onClick={props.onClick}>{props.children}</Secondary>;
        case "TextButton" :
            return <TextButton onClick={props.onClick}>{props.children}</TextButton>;
        case "IconFilledButton" :
            return <IconFilledButton onClick={props.onClick}>{props.children}</IconFilledButton>;
        case "IconButton" :
            return <IconButton onClick={props.onClick}>{props.children}</IconButton>;
        case "CardButton" :
            return <CardButton onClick={props.onClick}>{props.children}</CardButton>;
        default :
            return <Main onClick={props.onClick}>{props.children}</Main>;
    }
};