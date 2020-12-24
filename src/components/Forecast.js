import React from "react";
import styled from "styled-components"
import ForecastDay from "./ForecastDay";


const Container = styled.div`
	background: rgba(0,0,0,.4);
	backdrop-filter: blur(2rem);
	border-radius: 1rem;
	padding: 2rem;
	display: grid;
	align-items: center;
	width:100%;
	max-width: 50rem;
	margin:0 auto;
`

const Daily = styled.div`
	display: grid;
	grid-gap: 3rem;
	max-width: 30rem;
	margin: 0 auto;
`

const Forecast = ({ daily, hourly }) => {

    return (

		<Container>

			<Daily>
				{daily.map((day, i) => <ForecastDay key={i} day={day} />)}
			</Daily>
			

		</Container>

    )
}

export default Forecast;
