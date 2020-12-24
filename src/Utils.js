
export const COLOR_CHARCOAL = "#242424";
export const COLOR_WHITE = "#fff";
export const COLOR_SUNNY = "#f7b733";
export const COLOR_RAIN = "#55508d";
export const COLOR_CLOUDY = "#adc5e0";

export const DEGREE_SYMBOL = "˚";
export const PERCENT_SYMBOL = "%";
export const COMPASS_OPTIONS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

export const ICON_RAIN_LIGHT = "rainLight";
export const ICON_RAIN_HEAVY = "rainHeavy";
export const ICON_SNOW_LIGHT = "snowLight";
export const ICON_SNOW_HEAVY = "snowHeavy";
export const ICON_SNOW_MIXED = "snowMixed";
export const ICON_TSTORM = "tStorm";
export const ICON_CLOUDS_LIGHT_DAY = "cloudsLightDay";
export const ICON_CLOUDS_LIGHT_NIGHT = "cloudsLightNight";
export const ICON_CLOUDS_HEAVY = "cloudsHeavy";
export const ICON_CLEAR_DAY = "clearDay";
export const ICON_CLEAR_NIGHT = "clearNight";
export const ICON_FOG = "fog";
export const ICON_HAZE = "haze";
export const ICON_TORNADO = "tornado";
export const ICON_WIND = "wind";
export const ICON_TEMP = "temp";
export const ICON_PRECIP = "precip";
export const ICON_HUMID = "humid";

export const CODE_HAZE = 721;
export const CODE_FOG = 741;
export const CODE_WIND = 771;
export const CODE_TORNADO = 781; 

export const degToCompass = (deg = 0) => {
    const val = Math.floor((deg / 22.5) + 0.5);
    return COMPASS_OPTIONS[(val % 16)];
}

export const unixTimeToDate = (unixTime = 0) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const time = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return time;
}

export const translateWeatherCode = (code = 800, theme = THEME_LIGHT) => {
    switch (code) {
        case checkCodeList(code, codesRainLight):
            return ICON_RAIN_LIGHT;
        case checkCodeList(code, codesRainHeavy):
            return ICON_RAIN_HEAVY;
        case checkCodeList(code, codesSnowLight):
            return ICON_SNOW_LIGHT;
        case checkCodeList(code, codesSnowHeavy):
            return ICON_SNOW_HEAVY;
        case checkCodeList(code, codesSnowMixed):
            return ICON_SNOW_MIXED;
        case checkCodeList(code, codesTstorm):
            return ICON_TSTORM;
        case checkCodeList(code, codesCloudsHeavy):
            return ICON_CLOUDS_HEAVY;
        case checkCodeList(code, codesCloudsLight):
            if (theme === THEME_LIGHT) {
                return ICON_CLOUDS_LIGHT_DAY;
            } else {
                return ICON_CLOUDS_LIGHT_NIGHT;
            }
        case checkCodeList(code, codesClear):
            if (theme === THEME_LIGHT) {
                return ICON_CLEAR_DAY;
            } else {
                return ICON_CLEAR_NIGHT;
            }
        case checkCodeList(code, codesAtmosphere):
            switch (code) {
                case CODE_HAZE:
                    return ICON_HAZE;
                case CODE_WIND:
                    return ICON_WIND;
                case CODE_TORNADO:
                    return ICON_TORNADO;
                default:
                    return ICON_FOG;
            }
        default:
            return ICON_CLOUDS_HEAVY;
    }
}

function checkCodeList(code, codeList) {
    if (codeList.includes(code)) {
        return code;
    }
    return false;
}

export const codesTstorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
export const codesRainLight = [300, 301, 310, 321, 500, 501];
export const codesRainHeavy = [302, 311, 312, 313, 314, 502, 503, 504, 520, 521, 522, 531];
export const codesSnowLight = [600, 601, 620, 621];
export const codesSnowHeavy = [602, 622];
export const codesSnowMixed = [511, 611, 612, 613, 615, 616]
export const codesAtmosphere = [701, 711, CODE_HAZE, 731, CODE_FOG, 751, 761, 762, CODE_WIND, CODE_TORNADO];
export const codesClear = [800];
export const codesCloudsLight = [801, 802];
export const codesCloudsHeavy = [803, 804];

export const blurBlock = `
	background: rgba(0, 0, 0, .4);
	backdrop-filter: blur(1rem);
	border-radius: 1rem;
	padding: 2rem;
	display: grid;
	align-items: center;
	width:100%;
	max-width: 50rem;
	margin:0 auto;
`