import React from 'react';
import styled, { css } from 'styled-components'
import { DEGREE_SYMBOL, PERCENT_SYMBOL, degToCompass, unixTimeToDate } from '../Utils';
import WeatherIcon from './WeatherIcon';

const clippedText = `
    background-clip: text;
    -webkit-background-clip:text;
    color: transparent;
`

const Container = styled.div`
    background: var(--charcoal);
    color: var(--white);
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    max-width: 50rem;
    ${props => props.light && css`
        background: var(--white);
        color: var(--charcoal);
    `}
    ${props => !props.light && css`
        color: var(--white);
        ${clippedText}
    `}
    ${props => props.icon === 'clear-day' && css`
        background-image: linear-gradient(to bottom, var(--sunny), #fa961b, #fbc033, #fecc51, #ffe469, #fff57b);
    `}
    ${props => props.icon === 'clear-night' && css`
        background-image: linear-gradient(to bottom, var(--sunny), #fa961b, #fbc033, #fecc51, #ffe469, #fff57b);
        ${props => !props.light && css`
            color: var(--white);
        `}
    `}
    ${props => props.icon === 'rain' && css`
        background-image: linear-gradient(to bottom, var(--rain), #726da8, #7d8cc4, #a0d2db, #bee7e8);
    `}
    ${props => props.icon === 'cloudy' && css`
        background-image: linear-gradient(to bottom, var(--cloudy), #dde5f7, #fcfeff, #e8f1ff, #8eacd3);
    `}
`
const Header = styled.div`
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
`
const Temp = styled.div``
const ActualTemp = styled.div`
    font-size: 6.4rem;
    line-height: 1;
`
const FeelsTemp = styled.div`
    font-size: 1.6rem;
`

const Body = styled.div`
    align-self: flex-start;
    text-align: center;
    width: 100%;
`

const Condition = styled.div`
    font-size: 4.8rem;
    line-height: 1.2;
    padding-bottom: 1rem;
`

const Data = styled.div`
    line-height: 1.5
`

const Point = styled.div`
`

const Location = styled.div`
    text-transform: capitalize;
    padding-top:1rem;
    font-weight: 700;
`

const Footer = styled.div`
    align-self: flex-end;
    width: 100%;
`

const Updated = styled.div`
    text-align: center;
    font-size: 1rem;
    font-style: italic;
`

const Weather = ({ summary, sunrise, sunset, temperature, feelsLike, windSpeed, windBearing, humidity, precipitation, location, time, icon, dewPoint, pressure, visibility}) => {

    const light = time > sunrise && time < sunset;
    const desc = icon;

    return (

        <Container light={light} icon={desc}>

            <Header>
                <Icon>
                    <WeatherIcon light={light} icon={desc} />
                </Icon>
                <Temp>
                    <ActualTemp>{temperature}{DEGREE_SYMBOL}</ActualTemp>
                    <FeelsTemp>Feels Like {feelsLike}{DEGREE_SYMBOL}</FeelsTemp>
                </Temp>
            </Header>

            <Body>
                <Condition>{summary}</Condition>
                <Data>
                    <Point>Precipitation: {precipitation * 100}{PERCENT_SYMBOL}</Point>
                    <Point>Wind: {degToCompass(windBearing)} {windSpeed} mph</Point>
                    <Point>Humidity: {humidity * 100}{PERCENT_SYMBOL}</Point>
                    <Point>Dew Point: {Math.round(dewPoint)}{DEGREE_SYMBOL}</Point>
                    <Point>Pressure: {Math.round(pressure * 0.0295301)} in.</Point>
                    <Point>Visibility: {visibility} mi.</Point>
                </Data>
                <Location>{`${location.city}, ${location.state_code}`}</Location>
            </Body>

            <Footer>
                <Updated>Last updated @ {unixTimeToDate(time)}</Updated>
            </Footer>
            
        </Container>
    )
}

export default Weather;
