import React, { Fragment } from 'react';
import { COLOR_WHITE,
        ICON_RAIN_HEAVY_DAY,
        ICON_RAIN_HEAVY_NIGHT,
        ICON_RAIN_LIGHT_DAY,
        ICON_RAIN_LIGHT_NIGHT,
        ICON_CLOUDS_LIGHT_DAY,
        ICON_CLOUDS_LIGHT_NIGHT,
        ICON_CLOUDS_HEAVY_DAY,
        ICON_CLOUDS_HEAVY_NIGHT,
        ICON_SNOW_HEAVY_DAY,
        ICON_SNOW_HEAVY_NIGHT,
        ICON_SNOW_LIGHT_DAY,
        ICON_SNOW_LIGHT_NIGHT,
        ICON_SNOW_MIXED,
        ICON_TSTORM,
        ICON_CLEAR_DAY, 
        ICON_CLEAR_NIGHT,
        ICON_HAZE,
        ICON_WIND,
        ICON_FOG_DAY,
        ICON_FOG_NIGHT,
        ICON_TORNADO,
        ICON_TEMP,
        ICON_HUMID,
        ICON_PRECIP,
        ICON_SUNSET } from '../Utils';
import Icon from '@mdi/react'
import { mdiWeatherCloudy, mdiWeatherSnowy, mdiWeatherSnowyRainy, mdiWeatherWindy, mdiWeatherFog, mdiWeatherLightningRainy, mdiWeatherSunny, mdiWeatherNight, mdiWeatherPouring, mdiUmbrella, mdiThermometer, mdiWaterPercent, mdiWeatherSnowyHeavy, mdiWeatherTornado, mdiWeatherHazy, mdiWeatherPartlyCloudy, mdiWeatherNightPartlyCloudy, mdiWeatherSunset } from '@mdi/js'

const WeatherIcon = ({ icon, size = 2, color = COLOR_WHITE }) => {

    let path = null;

    switch(icon) {
        case ICON_RAIN_LIGHT_DAY:
        case ICON_RAIN_LIGHT_NIGHT:
        case ICON_RAIN_HEAVY_DAY:
        case ICON_RAIN_HEAVY_NIGHT:
            path = mdiWeatherPouring;
            break;
        case ICON_CLOUDS_HEAVY_DAY:
        case ICON_CLOUDS_HEAVY_NIGHT:
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
        case ICON_SNOW_LIGHT_DAY:
        case ICON_SNOW_LIGHT_NIGHT:
            path = mdiWeatherSnowy;
            break;
        case ICON_SNOW_HEAVY_DAY:
        case ICON_SNOW_HEAVY_NIGHT:
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
        case ICON_FOG_DAY:
        case ICON_FOG_NIGHT:
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
        case ICON_SUNSET:
            path = mdiWeatherSunset;
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
