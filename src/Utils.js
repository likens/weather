
export const COLOR_CHARCOAL = '#242424';
export const COLOR_WHITE = '#fff';
export const COLOR_SUNNY = '#f7b733';
export const DEGREE_SYMBOL = '˚';
export const PERCENT_SYMBOL = '%';
export const COMPASS_OPTIONS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

export const degToCompass = (deg = 0) => {
    const val = Math.floor((deg / 22.5) + 0.5);
    return COMPASS_OPTIONS[(val % 16)];
}

export const unixTimeToDate = (unixTime = 0) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const time = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return time;
}

export const averageApiValues = (values) => {
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = (sum / values.length) || 0;
    return Math.round(avg);
}