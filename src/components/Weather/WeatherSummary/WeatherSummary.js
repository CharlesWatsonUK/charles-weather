import React from 'react';
import classes from './WeatherSummary.module.scss';

import WeatherImage from '../../UI/WeatherImage/WeatherImage';

const weatherSummary = (props) => (
    <div className={[classes.WeatherSummary, props.className].join(' ')}>
        <WeatherImage 
            icon={props.weather.iconCode}
            className={classes.WeatherImage}/>
        <div className={classes.Info}>
            <h1>{props.weather.temp.toFixed(1)}°</h1>
            <h4>{props.weather.descriptionFull}</h4>
        </div>
        {props.forecastOption ? 
            <div className={classes.Forecast}>
                <i className="fas fa-binoculars" onClick={props.forecast}></i>
            </div>
        : null}
    </div>
);

export default weatherSummary;