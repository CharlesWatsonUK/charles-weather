import React from 'react';
import classes from './ForecastDaySummary.module.scss';
import WeatherAbstractionServices from '../../../../../service/WeatherAbstractionServices';
import UtilsServices from '../../../../../service/UtilsServices';

import WeatherImage from '../../../../UI/WeatherImage/WeatherImage';

const forecastDaySummary = (props) => {
    
    const dayName = UtilsServices.getDayName(props.data[0].dt.getDay());
    const dayHigh = WeatherAbstractionServices.maxTemp(props.data).toFixed(1);
    const dayLow = WeatherAbstractionServices.minTemp(props.data).toFixed(1);
    const dayIcon = WeatherAbstractionServices.modeIcon(props.data);
    
    return(
        <div className={[classes.ForecastDaySummary, props.className].join(' ')}>
            <p>{dayName}</p>
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