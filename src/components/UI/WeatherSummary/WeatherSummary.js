import React from 'react';
import classes from './WeatherSummary.module.scss';

import WeatherImage from './WeatherImage/WeatherImage';

const weatherSummary = (props) => (
    <div className={classes.WeatherSummary}>
        <WeatherImage icon={props.weather.iconCode}/>
        <div className={classes.Info}>
            <h1>{props.weather.temp}°</h1>
            <h4>{props.weather.descriptionFull}</h4>
        </div>
    </div>
);

export default weatherSummary;