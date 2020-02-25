import React, { Fragment } from 'react';
import { COLOR_CHARCOAL, 
        COLOR_WHITE,
        COLOR_SUNNY,
        COLOR_RAIN,
        COLOR_CLOUDY } from '../Utils';
import Icon from '@mdi/react'
import { mdiWeatherCloudy, mdiWeatherSnowy, mdiWeatherSnowyRainy, mdiWeatherWindy, mdiWeatherFog, mdiWeatherPartlyCloudy, mdiWeatherNightPartlyCloudy, mdiWeatherLightningRainy, mdiWeatherHail, mdiWeatherSunny, mdiWeatherNight, mdiWeatherPouring } from '@mdi/js'

const WeatherIcon = ({ icon, light }) => {

    let path = null;
    let color = null;
    const size = 6;

    if (light) {
        color = COLOR_CHARCOAL;
    } else {
        color = COLOR_WHITE;
    }

    switch(icon) {
        case 'rain':
            path = mdiWeatherPouring;
            if (!light) {
                color = COLOR_RAIN;
            }
            break;
        case 'snow':
            path = mdiWeatherSnowy;
            break;
        case 'sleet':
            path = mdiWeatherSnowyRainy;
            break;
        case 'wind':
            path = mdiWeatherWindy;
            break;
        case 'fog':
            path = mdiWeatherFog;
            break;
        case 'cloudy':
            path = mdiWeatherCloudy;
            if (!light) {
                color = COLOR_CLOUDY;
            }
            break;
        case 'partly-cloudy-day':
            path = mdiWeatherPartlyCloudy;
            break;
        case 'partly-cloudy-night':
            path = mdiWeatherNightPartlyCloudy;
            break;
        case 'hail':
            path = mdiWeatherHail;
            break;
        case 'thunderstorm':
            path = mdiWeatherLightningRainy;
            break;
        case 'clear-day':
            path = mdiWeatherSunny;
            if (!light) {
                color = COLOR_SUNNY;
            }
            break;
        case 'clear-night':
            path = mdiWeatherNight;
            break;
        default: 
            break;
    }

    return (
        <Fragment>
            <Icon path={path} color={color} size={size} />    
        </Fragment>
    )
}

export default WeatherIcon;
