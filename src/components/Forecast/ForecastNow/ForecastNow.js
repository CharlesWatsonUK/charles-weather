import React from 'react';
import classes from './ForecastNow.module.scss';

import WeatherSummary from '../../Weather/WeatherSummary/WeatherSummary';

const forecastNow = (props) => {
    let dayNightStyle;
    if(props.data.iconCode.indexOf('d') >= 0){
        dayNightStyle = 'WeatherDay';
    }else{
        dayNightStyle = 'WeatherNight';
    }

    return(
        <div className={[classes.ForecastNow, classes[dayNightStyle]].join(' ')}>
            <p style={{'fontSize': '1.5em'}}>Now</p>
            <WeatherSummary 
                weather={props.data}
                forecastOption={false}
                className={classes.WeatherSummary}/>
        </div>
    )
   
};

export default forecastNow;