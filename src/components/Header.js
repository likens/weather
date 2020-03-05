import React from "react";
import styled from "styled-components"
import { DEGREE_SYMBOL } from "../Utils";
import WeatherIcon from "./WeatherIcon";

const tempDiv = `
	display: flex;
	align-items: center;
	text-align: right;
	justify-content: flex-end;
	font-size: 1.2rem;
	margin: 0 .25rem;
`

const Container = styled.div`
    grid-area: header;
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
const Temperatures = styled.div`
	display: flex;
	align-items:center;
	flex-wrap: wrap;
	text-align: right;
	justify-content: flex-end;
`
const Actual = styled.div`
	font-size: 6.4rem;
	font-weight: 700;
	line-height: 1;
	width: 100%;
`
const Degree = styled.div`
	font-size: 4.8rem;
	display: inline-block;
	vertical-align: top;
	padding: .25rem 0 0;
`
const Apparent = styled.div`
	${tempDiv}
	width: 100%;
`
const High = styled.div`
	${tempDiv}
`
const Low = styled.div`
	${tempDiv}
`
const Label = styled.div``
const Temp = styled.div`
	font-weight: 700;
	display:inline-block;
	font-size: 1.6rem;
	margin: 0 0 0 .5rem;
`

const Header = ({ temps, theme, icon }) => {

    return (
		<Container>
			<Icon>
				<WeatherIcon theme={theme} icon={icon} />
			</Icon>
			<Temperatures>
				<Actual>{Math.round(temps.actual)}<Degree>{DEGREE_SYMBOL}</Degree></Actual>
				<Apparent>
					<Label>Feels Like</Label>
					<Temp>{Math.round(temps.apparent)}{DEGREE_SYMBOL}</Temp>
				</Apparent>
				<High>
					<Label>High</Label>
					<Temp>{Math.round(temps.high)}{DEGREE_SYMBOL}</Temp> 
				</High>
				<Low>
					<Label>Low</Label>
					<Temp>{Math.round(temps.low)}{DEGREE_SYMBOL}</Temp>
				</Low>
			</Temperatures>
		</Container>
    )
}

export default Header;
