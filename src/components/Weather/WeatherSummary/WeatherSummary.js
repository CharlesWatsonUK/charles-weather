import React from 'react';
import classes from './WeatherSummary.module.scss';

import WeatherImage from './WeatherImage/WeatherImage';

const weatherSummary = (props) => (
    <div className={[classes.WeatherSummary, props.className].join(' ')}>
        <WeatherImage icon={props.weather.iconCode}/>
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