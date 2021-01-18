import React, { Fragment } from "react";
import styled from "styled-components"
import WeatherIcon from "./WeatherIcon";
import { DEGREE_SYMBOL, PERCENT_SYMBOL, translateWeatherCode, ICON_TEMP, ICON_PRECIP } from "../Utils";

const Item = styled.div`
	display: grid;
	grid-template-columns: 4rem 4rem 10rem;
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
const DateSub = styled.div`
	font-size: 1.2rem;
	color: var(--grayed);
`
const DateMain = styled.div`
	font-weight: 700;
	font-size: 1.8rem;
	span {
		font-size: 1.2rem;
	}
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
	padding: 0 0 .5rem;
	width: 100%;
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

const ForecastItem = ({ item }) => {

	const isDay = item.temp.min && item.temp.max ? true : false;

	const date = new window.Date(item.dt * 1000);
	const month = date.getMonth() + 1;
	const dateOfMonth = date.getDate();
	const dateHours = date.getHours();

	const temp = isDay ? item.temp : Math.round(item.temp);
	const tempMin = Math.round(temp?.min);
	const tempMax = Math.round(temp?.max); 

    return (
		<Fragment>
			<Item>
				<Date>
					{isDay ? 
						<Fragment>
							<DateMain>{month}/{dateOfMonth}</DateMain>
							<DateSub>{date.toLocaleString('en-us', { weekday: 'short'})}</DateSub>
						</Fragment>
						:
						<Fragment>
							<DateMain>{(dateHours + 24) % 12 || 12}<span>{dateHours >= 12 ? 'PM' : 'AM'}</span></DateMain>
							<DateSub>{month}/{dateOfMonth}</DateSub>
						</Fragment>
					}
				</Date>

				<Icon>
					<WeatherIcon icon={translateWeatherCode(item.weather[0].id)} />
					<Description>{item.weather[0].main}</Description>
				</Icon>

				<Info>
					<Temps>
						<WeatherIcon icon={ICON_TEMP} size={1} />
						{isDay ?
							<Fragment>
								{tempMin}{DEGREE_SYMBOL}
								<span>/</span>
								{tempMax}{DEGREE_SYMBOL}
							</Fragment>
							:
							<Fragment>
								{temp}{DEGREE_SYMBOL}
							</Fragment>}
					</Temps>
					<PoP>
						<WeatherIcon icon={ICON_PRECIP} size={1} />
						{Math.round(item.pop * 100)}{PERCENT_SYMBOL}
					</PoP>
				</Info>
			</Item>

		</Fragment>
    )
}

export default ForecastItem;
