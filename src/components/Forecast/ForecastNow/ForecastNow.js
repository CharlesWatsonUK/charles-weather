import React from 'react';
import classes from './ForecastNow.module.scss';

import WeatherSummary from '../../Weather/WeatherSummary/WeatherSummary';
import WeatherDetails from '../../Weather/WeatherDetails/WeatherDetails';

const forecastNow = (props) => {
    
    return(
        <div className={classes.ForecastNow}>
            <WeatherSummary 
                weather={props.data}
                forecastOption={false}
                className={classes.WeatherSummary}/>
            <WeatherDetails
                weather={props.data}
                className={classes.WeatherDetails}/>
        </div>
    )
};

export default forecastNow;