import React, { Fragment } from "react";
import styled from "styled-components"
import WeatherIcon from "./WeatherIcon";
import { DEGREE_SYMBOL, PERCENT_SYMBOL, translateWeatherCode, ICON_TEMP, ICON_PRECIP } from "../Utils";

const Day = styled.div`
	display: grid;
	grid-template-columns: 4rem 4rem 1fr;
	grid-gap: 2rem;
	align-items: center;
	position: relative;
	&:not(:last-child):after {
		content: '';
		width: 75%;
		background: linear-gradient(90deg, transparent 0, var(--grayed) 50%, transparent);
		position: absolute;
		bottom: 0;
		left: 50%;
		height: 1px;
		transform: translate(-50%, 1.5rem);
	}
`

const Date = styled.div`
	text-transform:uppercase;
	text-align:center;
	letter-spacing: 1px;
`
const DayOfWeek = styled.div`
	font-size: 1.2rem;
	color: var(--grayed);
	padding: .5rem 0 0;
`
const DateOfMonth = styled.div`
	font-weight: 700;
	font-size: 1.8rem;
`
const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

const Description = styled.div`
	text-align: center;
	font-size: .8rem;
	padding: .25rem 0 0;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: var(--grayed);
`

const Info = styled.div`
	font-size: 1.8rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	color: var(--grayed);
	letter-spacing: 1px;
`

const Temps = styled.div`
	display: flex;
	align-items: center;
	padding: 0 2rem 0 0;
	span {
		font-size: 1.4rem;
		display:inline-block;
		padding:0 .5rem 0 .25rem;
	}
	svg {
		margin: 0 .5rem 0 0;
	}
`

const PoP = styled.div`
	display: flex;
	align-items: center;
	svg {
		margin: 0 .5rem 0 0;
	}
`

const ForecastDay = ({ day }) => {

	const date = new window.Date(day.dt * 1000);

    return (
		<Fragment>
			<Day>
				<Date>
					<DayOfWeek>{date.toLocaleString('en-us', { weekday: 'short'})}</DayOfWeek>
					<DateOfMonth>{date.getDate()}</DateOfMonth>
				</Date>

				<Icon>
					<WeatherIcon icon={translateWeatherCode(day.weather[0].id)} />
					<Description>{day.weather[0].main}</Description>
				</Icon>

				<Info>
					<Temps>
						<WeatherIcon icon={ICON_TEMP} size={1} />
						{Math.round(day.temp.min)}{DEGREE_SYMBOL}<span>/</span>{Math.round(day.temp.max)}{DEGREE_SYMBOL}
					</Temps>
					<PoP>
						<WeatherIcon icon={ICON_PRECIP} size={1} />
						{Math.round(day.pop * 100)}{PERCENT_SYMBOL}
					</PoP>
				</Info>
			</Day>

		</Fragment>
    )
}

export default ForecastDay;
