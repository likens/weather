import React, { Component } from "react";
import styled from "styled-components"
import ForecastItem from "./ForecastItem";
import { blurBlock } from "../Utils";


const Container = styled.div`
	${blurBlock}
	overflow: hidden;
	grid-gap: 2rem;
`

const ForecastList = styled.div`
	display: grid;
	align-content: flex-start;
	align-self: flex-start;
	grid-gap: 3rem;
	max-width: 30rem;
	margin: 0 auto;
	transition:all .5s ease;
	position: absolute;
	top: 0;
	left: 50%;
	opacity: ${props => props.active ? `1` : `0`};
	&:first-child {
		transform: ${props => props.active ? `translateX(-50%)`:`translateX(-250%)`};
	}
	&:last-child {
		transform: ${props => props.active ? `translateX(-50%)`:`translateX(250%)`};
	}
`

const ForecastContainer = styled.div`
	display: flex;
	position: relative;
	transition: height .5s ease;
	height:${props => props.height ? props.height : ""}px;
`

const ToggleList = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	&:before {
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		background: rgba(0,0,0,.5);
		border-radius: .5rem;
		content: '';
		height: 100%;
		transition: all .5s ease;
		${props => props.daily ? "transform: translateX(0)" : "transform: translateX(100%)"}
	}
`

const ToggleButton = styled.button`
	width: 50%;
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: .3rem;
	padding: .75rem;
	position:relative;
	cursor: pointer;
	font-size: 1.4rem;
	background: 0;
	border: 0;
	outline: 0; 
	color: inherit;
	font-family: inherit;
`
class Forecast extends Component {
	
	constructor() {
		super()
		this.dailyEl = React.createRef();
		this.hourlyEl = React.createRef();
		this.state = {
			showDaily: true,
			height: 0
		}
	}

	showForecastList(daily, el) {
		this.setState({
			showDaily: daily,
			height: el.current.clientHeight
		})
	}

	componentDidMount() {
		this.showForecastList(true, this.dailyEl);
	}

	render() {
		return (
			<Container>
				<ToggleList daily={this.state.showDaily}>
					<ToggleButton onClick={() => this.showForecastList(true, this.dailyEl)}>Daily</ToggleButton>
					<ToggleButton onClick={() => this.showForecastList(false, this.hourlyEl)}>Hourly</ToggleButton>
				</ToggleList>
				<ForecastContainer height={this.state.height}>
					<ForecastList active={this.state.showDaily} ref={this.dailyEl}>
						{this.props.daily.map((day, i) => <ForecastItem key={i} item={day} />)}
					</ForecastList>
					<ForecastList active={!this.state.showDaily} ref={this.hourlyEl}>
						{this.props.hourly.map((hour, i) => i < 24 ? <ForecastItem key={i} item={hour} /> : ``)}
					</ForecastList>
				</ForecastContainer>
			</Container>
		)
	}
}

export default Forecast;
