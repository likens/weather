import React from "react";
import styled from "styled-components"
import { DEGREE_SYMBOL, PERCENT_SYMBOL, degToCompass } from "../Utils";

const Container = styled.div`
    grid-area: body;
    align-self: flex-end;
    width: 100%;
`

const Condition = styled.div`
    font-size: 4.8rem;
    line-height: 1.2;
`

const Data = styled.div`
    line-height: 1.6
`

const Point = styled.div``

const Body = ({ desc, precip, misc }) => {

    return (
		<Container>
			<Condition>{desc.summary}</Condition>
			<Data>
				<Point>Precipitation: {Math.round(precip.probability * 100)}{PERCENT_SYMBOL}</Point>
				<Point>Wind: {degToCompass(misc.wind.bearing)} {misc.wind.speed} mph</Point>
				<Point>Humidity: {Math.round(precip.humidity * 100)}{PERCENT_SYMBOL}</Point>
				<Point>Dew Point: {Math.round(precip.dewPoint)}{DEGREE_SYMBOL}</Point>
				<Point>Pressure: {Math.round(misc.pressure * 0.0295301)} in.</Point>
				<Point>Visibility: {misc.visibility} mi.</Point>
			</Data>
		</Container>
    )
}

export default Body;
