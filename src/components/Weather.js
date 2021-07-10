import React, { Fragment } from "react";
import styled from "styled-components"
import Current from "./Current";
import Forecast from "./Forecast";
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
            {/* <img src={desc.img} style={{position: 'absolute'}} /> */}
            {/* <Background 
                theme={theme} 
                style={{backgroundImage: `url(${desc.img})`}} /> */}
        </Fragment>
    )
}

export default Weather;
