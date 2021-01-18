import React from "react";
import styled from "styled-components"
import ForecastItem from "./ForecastItem";
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

// const Hourly = styled.div`
// 	display: grid;
// 	grid-gap: 3rem;
// 	max-width: 30rem;
// 	margin: 0 auto;
// `

const Forecast = ({ daily, hourly }) => {

    return (
		<Container>
			{/* <Hourly>
				{hourly.map((hour, i) => i < 24 ? <ForecastItem key={i} item={hour} /> : ``)}
			</Hourly> */}
			<Daily>
				{daily.map((day, i) => <ForecastItem key={i} item={day} />)}
			</Daily>
		</Container>
    )
}

export default Forecast;
