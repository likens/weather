import React from "react";
import styled from "styled-components"
import WeatherIcon from "./WeatherIcon";
import { DEGREE_SYMBOL, PERCENT_SYMBOL, degToCompass, ICON_TEMP, ICON_PRECIP, ICON_WIND, ICON_HUMID } from "../Utils";

const Container = styled.div`
	background: rgba(0,0,0,.4);
	backdrop-filter: blur(2rem);
	border-radius: 1rem;
	padding: 2rem 1rem;
	display: grid;
	align-items: center;
	width:100%;
	max-width: 50rem;
	margin: 0 auto;
`
const Temperatures = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
	flex-wrap: wrap;
	text-align: center;
	line-height: 1;
	font-size: 1.8rem;
	width: 100%;
	color: var(--grayed);
`
const Actual = styled.div`
	font-weight: 700;
	font-size: 5.2rem;
	margin: 0 4rem;
	position: relative;
	color: var(--white);
	&:before,
	&:after {
		content: '/';
		color: var(--grayed);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 2.6rem;
		font-weight: 400;
	}
	&:before {
		left: -2.5rem;
	}
	&:after {
		right: -2rem;
	}
`

const Temp = styled.div`
	font-size: 2.6rem;
`

const Location = styled.div`
	text-transform:uppercase;
	font-weight: 700;
	font-size: 2.4rem;
	padding:0 0 1rem;
	width: 100%;
`

const Tagline = styled.div`
	font-size: 2rem;
	color: var(--grayed);
	padding: 0 0 1rem;
`

const Intro = styled.div`
	text-align:center;
	text-transform:uppercase;
	letter-spacing: 1px;
	line-height: 1;
	width: 100%;
`
const Label = styled.div`
	font-size: 1.2rem;
	color: var(--grayed);
	text-transform: uppercase;
`

const Value = styled.div`
	font-weight: 700;
	padding-left: .75rem;
	color: var(--white);
`

const Data = styled.div`
	padding:1.5rem 0 0;
`;
const Point = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
	padding: .5rem 0 0;
	letter-spacing: 1px;
	font-size: 1.6rem;
	width: 100%;
`
const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 .5rem 0 0;
`

const Image = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
`;

const Date = styled.div`
	font-size: 1.2rem;
	color: var(--grayed);
`

const Current = ({ desc, temps, geo, precip, misc }) => {

	const date = new window.Date(desc.time * 1000).toLocaleString('en-us');
	const name = geo[1] ? geo[1].name : geo[0].name;
	const state = geo[1] ? geo[1].state : geo[0].state;
	const country = geo[1] ? geo[1].country : geo[0].country;

    return (

		<Container>

			<Intro>
				<Location>{name}{`${state ? `, ${state}` : `${country}`}`}</Location>
				<Tagline>{desc.tagline}</Tagline>
			</Intro>

			<Image>
				<WeatherIcon icon={desc.term} size={6} />
			</Image>

			<Temperatures>
				<Temp>{Math.round(temps.low)}{DEGREE_SYMBOL}</Temp>
				<Actual>{Math.round(temps.current)}{DEGREE_SYMBOL}</Actual>
				<Temp>{Math.round(temps.high)}{DEGREE_SYMBOL}</Temp>
			</Temperatures>

			<Data>
				<Point>
					<Icon>
						<WeatherIcon icon={ICON_TEMP} size={1} />
					</Icon>
					<Label>Feels Like</Label>
					<Value>{Math.round(temps.feels_like)}{DEGREE_SYMBOL}</Value>
				</Point>
				<Point>
					<Icon>
						<WeatherIcon icon={ICON_PRECIP} size={1} />
					</Icon>
					<Label>Precip</Label>
					<Value>{Math.round(precip.probability * 100)}{PERCENT_SYMBOL}</Value>
				</Point>
				<Point>
					<Icon>
						<WeatherIcon icon={ICON_WIND} size={1} />
					</Icon>
					<Label>Wind</Label>
					<Value>{Math.round(misc.wind.speed)} mph, {degToCompass(misc.wind.deg)}</Value>
				</Point>
				<Point>
					<Icon>
						<WeatherIcon icon={ICON_HUMID} size={1} />
					</Icon>
					<Label>Humidity</Label>
					<Value>{Math.round(precip.humidity)}{PERCENT_SYMBOL}</Value>
				</Point>
				<Point>
					<Label>{date}</Label>
				</Point>
			</Data>

		</Container>

    )
}

export default Current;
