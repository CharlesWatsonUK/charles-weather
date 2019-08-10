import React from 'react';
import classes from './ForecastDaySummary.module.scss';
import WeatherAbstractionServices from '../../../../../service/WeatherAbstractionServices';

import WeatherImage from '../../../../UI/WeatherImage/WeatherImage';

const forecastDaySummary = (props) => {
    const dayHigh = WeatherAbstractionServices.maxTemp(props.data);
    const dayLow = WeatherAbstractionServices.minTemp(props.data);
    const dayIcon = WeatherAbstractionServices.modeIcon(props.data);
    
    return(
        <div className={[classes.ForecastDaySummary, props.className].join(' ')}>
            <WeatherImage 
                icon={dayIcon}
                className={classes.WeatherImage}/>
            <div className={classes.WeatherDetails}>
                <h2>{dayHigh}°</h2>
                <p>{dayLow}°</p>
            </div>
        </div>
    );
    
}

export default forecastDaySummary;