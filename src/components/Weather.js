import React from "react";
import styled, { css } from "styled-components"
import { THEME_LIGHT, THEME_DARK } from "../Utils";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const clippedText = `
    background-clip: text;
    -webkit-background-clip:text;
    color: transparent;
`

const Container = styled.div`
    background: var(--charcoal);
    color: var(--white);
    display: grid;
    grid-template-areas: "header header"
                         "body footer";
    padding: 2rem;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    max-width: 50rem;
    ${props => props.theme === THEME_LIGHT && css`
        background: var(--white);
        color: var(--charcoal);
    `}
    ${props => props.theme === THEME_DARK && css`
        color: var(--white);
    `}
    ${props => props.icon === "clear-day" && css`
        background-image: linear-gradient(to bottom, var(--sunny), #fa961b, #fbc033, #fecc51, #ffe469, #fff57b);
        ${props => props.theme === THEME_DARK && css`  
            ${clippedText}
        `}
    `}
    ${props => props.icon === "rain" && css`
        background-image: linear-gradient(to bottom, var(--rain), #726da8, #7d8cc4, #a0d2db, #bee7e8);
        ${props => props.theme === THEME_DARK && css`  
            ${clippedText}
        `}
    `}
    ${props => props.icon === "cloudy" && css`
        background-image: linear-gradient(to bottom, var(--cloudy), #dde5f7, #fcfeff, #e8f1ff, #8eacd3);
        ${props => props.theme === THEME_DARK && css`  
            ${clippedText}
        `}
    `}
`
const Weather = ({ times, temps, precip, misc, desc, location, theme }) => {

    return (
        <Container theme={theme} icon={desc.icon}>
            <Header theme={theme} temps={temps} icon={desc.icon} />
            <Body desc={desc} precip={precip} misc={misc} />
            <Footer times={times} location={location} />
        </Container>
    )
}

export default Weather;
