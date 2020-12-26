import React from "react";
import styled from "styled-components"
import Current from "./Current";
import Forecast from "./Forecast";

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    padding: 2rem;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const Weather = ({ temps, precip, misc, desc, geo, theme, daily, hourly }) => {

    return (
        <Container theme={theme} style={{backgroundImage: `url(/bg/${desc.term}.jpg)`}}>
            <Current 
                geo={geo}
                desc={desc}
                theme={theme} 
                temps={temps}
                precip={precip}
                misc={misc} />
            <Forecast 
                daily={daily}
                hourly={hourly} />
        </Container>
    )
}

export default Weather;
