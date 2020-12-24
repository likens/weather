import React, { Fragment } from 'react';
import { COLOR_WHITE,
        ICON_CLOUDS_HEAVY,
        ICON_CLOUDS_LIGHT_DAY,
        ICON_CLOUDS_LIGHT_NIGHT,
        ICON_RAIN_HEAVY,
        ICON_RAIN_LIGHT,
        ICON_SNOW_HEAVY,
        ICON_SNOW_LIGHT,
        ICON_SNOW_MIXED,
        ICON_TSTORM,
        ICON_CLEAR_DAY, 
        ICON_CLEAR_NIGHT,
        ICON_HAZE,
        ICON_WIND,
        ICON_FOG,
        ICON_TORNADO,
        ICON_TEMP,
        ICON_HUMID,
        ICON_PRECIP } from '../Utils';
import Icon from '@mdi/react'
import { mdiWeatherCloudy, mdiWeatherSnowy, mdiWeatherSnowyRainy, mdiWeatherWindy, mdiWeatherFog, mdiWeatherLightningRainy, mdiWeatherSunny, mdiWeatherNight, mdiWeatherPouring, mdiUmbrella, mdiThermometer, mdiWaterPercent, mdiWeatherSnowyHeavy, mdiWeatherTornado, mdiWeatherHazy, mdiWeatherPartlyCloudy, mdiWeatherNightPartlyCloudy } from '@mdi/js'

const WeatherIcon = ({ icon, size = 2, color = COLOR_WHITE }) => {

    let path = null;

    switch(icon) {
        case ICON_RAIN_LIGHT:
        case ICON_RAIN_HEAVY:
            path = mdiWeatherPouring;
            break;
        case ICON_CLOUDS_HEAVY:
            path = mdiWeatherCloudy;
            break;
        case ICON_CLOUDS_LIGHT_DAY:
            path = mdiWeatherPartlyCloudy;
            break;
        case ICON_CLOUDS_LIGHT_NIGHT:
            path = mdiWeatherNightPartlyCloudy;
            break;
        case ICON_TSTORM:
            path = mdiWeatherLightningRainy;
            break;
        case ICON_SNOW_LIGHT:
            path = mdiWeatherSnowy;
            break;
        case ICON_SNOW_HEAVY:
            path = mdiWeatherSnowyHeavy;
            break;
        case ICON_SNOW_MIXED:
            path = mdiWeatherSnowyRainy;
            break;
        case ICON_CLEAR_DAY:
            path = mdiWeatherSunny;
            break;
        case ICON_CLEAR_NIGHT:
            path = mdiWeatherNight;
            break;
        case ICON_FOG:
            path = mdiWeatherFog;
            break;
        case ICON_HAZE:
            path = mdiWeatherHazy;
            break;
        case ICON_WIND:
            path = mdiWeatherWindy;
            break;
        case ICON_TORNADO:
            path = mdiWeatherTornado;
            break;
        case ICON_PRECIP:
            path = mdiUmbrella;
            break;
        case ICON_TEMP:
            path = mdiThermometer;
            break;
        case ICON_HUMID:
            path = mdiWaterPercent;
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
