import React, { Fragment } from 'react';
import { WiDaySunny, WiNightClear, WiDayRain, WiDayWindy, WiDayCloudy, WiDayFog, WiDayHail, WiDayThunderstorm, WiNightRain, WiNightSleet, WiNightFog, WiNightCloudy, WiNightPartlyCloudy, WiNightHail, WiNightCloudyWindy, WiDaySnow, WiDaySleet, WiCloudy, WiNightSnow, WiNightThunderstorm } from 'weather-icons-react';
import { COLOR_CHARCOAL, COLOR_WHITE } from '../Utils';

const size = 140;

const WeatherIcon = ({ icon, day }) => {

    let wicon = null;
    let theme = null;

    if (day) {
        theme = COLOR_CHARCOAL;
        switch(icon) {
            case 'rain':
                wicon = <WiDayRain size={size} color={theme} />
                break;
            case 'snow':
                wicon = <WiDaySnow size={size} color={theme} />
                break;
            case 'sleet':
                wicon = <WiDaySleet size={size} color={theme} />
                break;
            case 'wind':
                wicon = <WiDayWindy size={size} color={theme} />
                break;
            case 'fog':
                wicon = <WiDayFog size={size} color={theme} />
                break;
            case 'cloudy':
                wicon = <WiCloudy size={size} color={theme} />
                break;
            case 'partly-cloudy-day':
                wicon = <WiDayCloudy size={size} color={theme} />
                break;
            case 'hail':
                wicon = <WiDayHail size={size} color={theme} />
                break;
            case 'thunderstorm':
                wicon = <WiDayThunderstorm size={size} color={theme} />
                break;
            default: 
                wicon = <WiDaySunny size={size} color={theme} />
                break;
        }
    } else {
        theme = COLOR_WHITE;
        switch(icon) {
            case 'rain':
                wicon = <WiNightRain size={size} color={theme} />
                break;
            case 'snow':
                wicon = <WiNightSnow size={size} color={theme} />
                break;
            case 'sleet':
                wicon = <WiNightSleet size={size} color={theme} />
                break;
            case 'wind':
                wicon = <WiNightCloudyWindy size={size} color={theme} />
                break;
            case 'fog':
                wicon = <WiNightFog size={size} color={theme} />
                break;
            case 'cloudy':
                wicon = <WiNightCloudy size={size} color={theme} />
                break;
            case 'partly-cloudy-night':
                wicon = <WiNightPartlyCloudy size={size} color={theme} />
                break;
            case 'hail':
                wicon = <WiNightHail size={size} color={theme} />
                break;
            case 'thunderstorm':
                wicon = <WiNightThunderstorm size={size} color={theme} />
                break;
            default: 
                wicon = <WiNightClear size={size} color={theme} />
                break;
        }
    }

    return (
        <Fragment>{wicon}</Fragment>
    )
}

export default WeatherIcon;
