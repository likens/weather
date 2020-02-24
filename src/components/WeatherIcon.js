import React, { Fragment } from 'react';
import { WiCloudy, WiHail, WiDaySunny, WiNightClear, WiRain, WiSnow, WiSleet, WiFog, WiThunderstorm, WiWindy, WiDayCloudy, WiNightAltCloudy } from 'weather-icons-react';
import { COLOR_CHARCOAL, COLOR_WHITE } from '../Utils';

const size = 140;

const WeatherIcon = ({ icon, day }) => {

    let wicon = null;
    let theme = null;

    if (day) {
        theme = COLOR_CHARCOAL;
    } else {
        theme = COLOR_WHITE;
    }

    switch(icon) {
        case 'rain':
            wicon = <WiRain size={size} color={theme} />
            break;
        case 'snow':
            wicon = <WiSnow size={size} color={theme} />
            break;
        case 'sleet':
            wicon = <WiSleet size={size} color={theme} />
            break;
        case 'wind':
            wicon = <WiWindy size={size} color={theme} />
            break;
        case 'fog':
            wicon = <WiFog size={size} color={theme} />
            break;
        case 'cloudy':
            wicon = <WiCloudy size={size} color={theme} />
            break;
        case 'partly-cloudy-day':
            wicon = <WiDayCloudy size={size} color={theme} />
            break;
        case 'partly-cloudy-night':
            wicon = <WiNightAltCloudy size={size} color={theme} />
            break;
        case 'hail':
            wicon = <WiHail size={size} color={theme} />
            break;
        case 'thunderstorm':
            wicon = <WiThunderstorm size={size} color={theme} />
            break;
        default: 
            if (day) {
                wicon = <WiDaySunny size={size} color={theme} />
            } else {
                wicon = <WiNightClear size={size} color={theme} />
            }
            break;
    }

    return (
        <Fragment>{wicon}</Fragment>
    )
}

export default WeatherIcon;
