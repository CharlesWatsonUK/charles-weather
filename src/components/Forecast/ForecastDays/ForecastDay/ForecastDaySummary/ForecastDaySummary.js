import React from 'react';
import classes from './ForecastDaySummary.scss';
import WeatherAbstractionServices from '../../../../../service/WeatherAbstractionServices';

import WeatherImage from '../../../../Weather/WeatherSummary/WeatherImage/WeatherImage';

const forecastDaySummary = (props) => {
    const dayHigh = WeatherAbstractionServices.maxTemp(props.data);
    const dayLow = WeatherAbstractionServices.minTemp(props.data);
    const dayIcon = WeatherAbstractionServices.modeIcon(props.data);
    
    return(
        <div className={[classes.ForecastDaySummary, props.className].join(' ')}>
            <WeatherImage icon={dayIcon}/>
            <p>{dayHigh}</p>
            <p>{dayLow}</p>
        </div>
    );
    
}

export default forecastDaySummary;