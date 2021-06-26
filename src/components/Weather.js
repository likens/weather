import React, { Fragment } from "react";
import styled from "styled-components"
import Current from "./Current";
import Forecast from "./Forecast";
import { getBackgroundImage, fade } from "../Utils";
// import Search from "./Search";

const Container = styled.div`
    display: grid;
    align-items: center;
	align-content: flex-start;
    justify-content: center;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    padding: 2rem;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    z-index: 2000;
`
const Background = styled.div`
    animation-name: ${fade};
    animation-duration: 500ms;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
`

const Weather = ({ temps, times, precip, misc, desc, geo, theme, daily, hourly, alerts }) => {

    return (
        <Fragment>
            <Container>
                {/* <Search geo={geo} /> */}
                <Current 
                    geo={geo}
                    desc={desc}
                    theme={theme}
                    times={times} 
                    temps={temps}
                    precip={precip}
                    misc={misc}
                    alerts={alerts} />
                <Forecast 
                    daily={daily}
                    hourly={hourly} />
            </Container>
            <Background 
                theme={theme} 
                style={{backgroundImage: `url(${getBackgroundImage(desc.term)})`}} />
        </Fragment>
    )
}

export default Weather;
