import React, {Fragment} from "react";
import styled from "styled-components";
import { TailSpin } from "svg-loaders-react";
import Weather from "./components/Weather";
import { THEME_LIGHT, THEME_DARK } from "./Utils"

const FORT_WAYNE_COORDS_LAT = "41.0793";
const FORT_WAYNE_COORDS_LNG = "-85.1394";
const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
// const OPEN_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=";
// const OPEN_WEATHER_API_KEY = "6aff0b217cdefa11d1254c77ccb78fbf";
const DARK_SKY_API_URL = "https://api.darksky.net/forecast/";
const DARK_SKY_API_KEY = "8c71429101c9409672e767129e60416c";
const OPEN_CAGE_DATA_URL = "https://api.opencagedata.com/geocode/v1/json?q=";
const OPEN_CAGE_DATA_API_KEY = "7899536daead4d3ca2ef479bf4df8ade";

const resetState = {
	isLoading: false,
	darkSky: null,
	openCageData: null,
	luminosity: 0,
	theme: null,
	error: null
};

const Refresh = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
`

export default class App extends React.Component {

	state = {
		...resetState
	};

	componentDidMount() {
		this.getPosition();
		if ( "AmbientLightSensor" in window ) {
			const sensor = new window.AmbientLightSensor();
			sensor.onreading = () => {
			  console.log("Current light level:", sensor.illuminance);
			};
			sensor.onerror = (event) => {
			  console.log(event.error.name, event.error.message);
			};
			sensor.start();
		  }
	}

	getPosition() {
		this.setState({
			...resetState
		})
		navigator.geolocation.getCurrentPosition(
			position => {
				this.fetchWeather(position.coords.latitude, position.coords.longitude);
			},
			error => {
				this.fetchWeather(FORT_WAYNE_COORDS_LAT, FORT_WAYNE_COORDS_LNG);
			}
		);
	}

	fetchWeather(lat, lng) {

		const darkSkyUrl = 
			`${CORS_ANYWHERE_URL}${DARK_SKY_API_URL}${DARK_SKY_API_KEY}/${lat},${lng}`;
		const openCageDataUrl = 
			`${CORS_ANYWHERE_URL}${OPEN_CAGE_DATA_URL}${lat}+${lng}&key=${OPEN_CAGE_DATA_API_KEY}`;
		

		fetch(darkSkyUrl).then(res => res.json()).then(json => {

			const time = json.currently.time;
			const sunrise = json.daily.data[0].sunriseTime;
			const sunset = json.daily.data[0].sunsetTime;

			this.setState({
				theme: time > sunrise && time < sunset ? THEME_LIGHT : THEME_DARK,
				darkSky: {
					raw: json,
					times: {
						current: time,
						sunrise: sunrise,
						sunset: sunset
					},
					temps: {
						actual: json.currently.temperature,
						apparent: json.currently.apparentTemperature,
						high: json.daily.data[0].temperatureHigh,
						low: json.daily.data[0].temperatureLow
					},
					precip: {
						humidity: json.currently.humidity,
						probability: json.daily.data[0].precipProbability,
						dewPoint: json.daily.data[0].dewPoint
					},
					misc: {
						pressure: json.daily.data[0].pressure,
						visibility: json.daily.data[0].visibility,
						wind: {
							speed: json.daily.data[0].windSpeed,
							bearing: json.daily.data[0].windBearing
						}
					},
					desc: {
						summary: json.currently.summary,
						icon: json.currently.icon
					}
				}
			});
		});

		fetch(openCageDataUrl).then(res => res.json()).then(json => {
			this.setState({
				openCageData: json
			});
		});
	}

	render() {

		let darkSky, openCageData = null;

		if (this.state.darkSky &&
			this.state.openCageData) {
			darkSky = this.state.darkSky;
			openCageData = this.state.openCageData;
		}

		return (
			<div className="master">
				{ darkSky && openCageData ? 
					<Fragment>
						<Weather
							times={this.state.darkSky.times}
							temps={this.state.darkSky.temps}
							precip={this.state.darkSky.precip}
							misc={this.state.darkSky.misc}
							desc={this.state.darkSky.desc}
							theme={this.state.theme}
							location={openCageData.results[0].components} />
							<Refresh onClick={() => this.getPosition()}></Refresh>
					</Fragment> : 
					<TailSpin width={120} height={120} stroke={"#fff"} /> }
			</div>
		);
	}
}