import React from "react";
import styled from "styled-components"
import ForecastDay from "./ForecastDay";
import { blurBlock } from "../Utils";


const Container = styled.div`
	${blurBlock}
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
