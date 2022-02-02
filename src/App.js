import React, {Fragment} from "react";
import styled from "styled-components";
import { TailSpin } from "svg-loaders-react";
import Weather from "./components/Weather";
import { THEME_LIGHT, THEME_DARK, COLOR_WHITE, translateWeatherCode, getBackgroundImage, fade } from "./Utils";

const FORT_WAYNE_COORDS_LAT = "41.0793";
const FORT_WAYNE_COORDS_LNG = "-85.1394";

const OPEN_WEATHER_URL = "https://api.openweathermap.org";
const OPEN_WEATHER_WEATHER_PATH = "/data/2.5/onecall";
const OPEN_WEATHER_GEOCODING_PATH = "/geo/1.0/reverse";
const OPEN_WEATHER_PARAMS_START = "?appid="
const OPEN_WEATHER_API_KEY = process?.env?.REACT_APP_OPEN_WEATHER_API_KEY;

const resetState = {
	weather: null,
	geo: null,
	time: null,
	luminosity: 0,
	theme: null
};

const Master = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
`

const Loader = styled.div`
	text-align: center;
	margin-top: -33vh;
`

const Message = styled.div`
	font-weight: 700;
	font-size: 2rem;
	padding-top: 4rem;
	width: 100%;
`

const Refresh = styled.div`
	position: absolute;
	height: 20rem;
	left: 50%;
	top: 2rem;
	width: 100%;
	max-width: 50rem;
	transform: translateX(-50%);
	z-index: 3000;
`

const Background = styled.img`
	animation-name: ${fade};
	animation-duration: 500ms;
	position: fixed;
	top: 0;
	object-fit: cover;
	width: 100vw;
	height: 100vh;
	display: block;
	z-index: 1000;
`

export default class App extends React.Component {

	state = {
		...resetState
	};

	componentDidMount() {
		this.initApp();
	}

	initApp() {
		this.setState({
			...resetState
		});
		const pos = { lat: FORT_WAYNE_COORDS_LAT, lng: FORT_WAYNE_COORDS_LNG };
		const opts = { maximumAge: 0, timeout: 5000 };
		navigator.geolocation.getCurrentPosition(
			position => { 
				pos.lat = position.coords.latitude;
				pos.lng = position.coords.longitude;
				this.getAndSetWeather(pos);
				this.getAndSetGeo(pos);
			},
			error => { 
				this.getAndSetWeather(pos);
				this.getAndSetGeo(pos);
			}, 
			opts
		);
	}

	getAndSetWeather(pos) {

		const url = 
			`${OPEN_WEATHER_URL}${OPEN_WEATHER_WEATHER_PATH}${OPEN_WEATHER_PARAMS_START}${OPEN_WEATHER_API_KEY}&lat=${pos.lat}&lon=${pos.lng}&units=imperial&exclude=minutely`;

		fetch(url).then(res => res.json()).then(json => {

			const time = json.current.dt;
			const sunrise = json.current.sunrise;
			const sunset = json.current.sunset;
			const theme = time > sunrise && time < sunset ? THEME_LIGHT : THEME_DARK;
			const term = translateWeatherCode(json.current.weather[0].id, theme);

			const img = new Image();
			img.src = getBackgroundImage(term);

			img.onload = () => {
				this.setState({
					theme: theme,
					weather: {
						raw: json,
						times: {
							current: time,
							sunrise: sunrise,
							sunset: sunset
						},
						temps: {
							current: json.current.temp,
							feels_like: json.current.feels_like,
							high: json.daily[0].temp.max,
							low: json.daily[0].temp.min
						},
						precip: {
							humidity: json.current.humidity,
							probability: json.daily[0].pop,
							dew_point: json.daily[0].dew_point
						},
						misc: {
							pressure: json.current.pressure,
							visibility: json.current.visibility,
							wind: {
								speed: json.current.wind_speed,
								deg: json.current.wind_deg
							}
						},
						desc: {
							code: json.current.weather[0].id,
							tagline: json.current.weather[0].description,
							term: term,
							time: time,
							img: img
						},
						alerts: json.alerts,
						daily: json.daily,
						hourly: json.hourly,
						url: url,
					},
				})
			}

		});
	}

	getAndSetGeo(pos) {

		const url =
			`${OPEN_WEATHER_URL}${OPEN_WEATHER_GEOCODING_PATH}${OPEN_WEATHER_PARAMS_START}${OPEN_WEATHER_API_KEY}&lat=${pos.lat}&lon=${pos.lng}&limit=5`;

		fetch(url).then(res => res.json()).then(json => {
			this.setState({
				geo: {
					locations: json,
					url: url
				}
			})
		});
		
	}

	render() {

		return (
			<Master>
				{ this.state.weather && this.state.geo ? 
					<Fragment>
						<Weather 
							theme={this.state.theme}
							times={this.state.weather.times}
							temps={this.state.weather.temps}
							precip={this.state.weather.precip}
							misc={this.state.weather.misc}
							desc={this.state.weather.desc}
							geo={this.state.geo} 
							daily={this.state.weather.daily}
							hourly={this.state.weather.hourly}
							alerts={this.state.weather.alerts} />
						<Refresh onClick={() => this.initApp()}></Refresh>
						<Background src={this.state.weather.desc.img.src} />
					</Fragment> : 
					<Loader onClick={() => this.initApp()}>
						<TailSpin width={120} height={120} stroke={COLOR_WHITE} />
						<Message>Fetching local weather...</Message>
					</Loader> }
			</Master>
		);
	}
}