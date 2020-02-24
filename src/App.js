import React, {Fragment} from 'react';
import styled from 'styled-components';
import { TailSpin } from 'svg-loaders-react';
import { averageApiValues } from './Utils';
import Weather from './components/Weather';

const FORT_WAYNE_COORDS_LAT = '41.0793';
const FORT_WAYNE_COORDS_LNG = '-85.1394';
const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=';
const OPEN_WEATHER_API_KEY = '6aff0b217cdefa11d1254c77ccb78fbf';
const DARK_SKY_API_URL = 'https://api.darksky.net/forecast/';
const DARK_SKY_API_KEY = '8c71429101c9409672e767129e60416c';
const OPEN_CAGE_DATA_URL = 'https://api.opencagedata.com/geocode/v1/json?q=';
const OPEN_CAGE_DATA_API_KEY = '7899536daead4d3ca2ef479bf4df8ade';

const resetState = {
	isLoading: false,
	darkSky: null,
	openWeather: null,
	openCageData: null,
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
		const openWeatherUrl = 
			`${CORS_ANYWHERE_URL}${OPEN_WEATHER_API_URL}${OPEN_WEATHER_API_KEY}&lat=${lat}&lon=${lng}`
		const openCageDataUrl = 
			`${CORS_ANYWHERE_URL}${OPEN_CAGE_DATA_URL}${lat}+${lng}&key=${OPEN_CAGE_DATA_API_KEY}`;

		fetch(darkSkyUrl).then(res => res.json()).then(json => {
			this.setState({
				darkSky: json
			});
		});

		fetch(openWeatherUrl).then(res => res.json()).then(json => {
			this.setState({
				openWeather: json
			});
		});

		fetch(openCageDataUrl).then(res => res.json()).then(json => {
			this.setState({
				openCageData: json
			});
		});
	}

	render() {

		let openWeather, darkSky, openCageData = null;

		if (this.state.darkSky && 
			this.state.openWeather && 
			this.state.openCageData) {
			darkSky = this.state.darkSky;
			openWeather = this.state.openWeather;
			openCageData = this.state.openCageData;
		}

		return (
			<div className="master">
				{ darkSky && openWeather && openCageData ? 
					<Fragment>
						<Weather summary={darkSky.currently.summary}
							sunrise={openWeather.sys.sunrise}
							sunset={openWeather.sys.sunset}
							temperature={averageApiValues([
								darkSky.currently.temperature, 
								openWeather.main.temp])}
							feelsLike={averageApiValues([
								darkSky.currently.apparentTemperature,
								openWeather.main.feels_like])}
							windSpeed={averageApiValues([
								darkSky.currently.windSpeed,
								openWeather.wind.speed])}
							windBearing={averageApiValues([
								darkSky.currently.windBearing,
								openWeather.wind.deg])}
							humidity={darkSky.currently.humidity}
							precipitation={darkSky.currently.precipProbability}
							dewPoint={darkSky.currently.dewPoint}
							pressure={darkSky.currently.pressure}
							visibility={darkSky.currently.visibility}
							location={openCageData.results[0].components}
							time={darkSky.currently.time}
							icon={darkSky.currently.icon} />
							<Refresh onClick={() => this.getPosition()}></Refresh>
					</Fragment> : 
					<TailSpin width={120} height={120} stroke={"#fff"} /> }
			</div>
		);
	}
}