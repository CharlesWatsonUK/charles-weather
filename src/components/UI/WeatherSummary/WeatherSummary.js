import React from 'react';
import classes from './WeatherSummary.module.scss';

import WeatherImage from './WeatherImage/WeatherImage';

const weatherSummary = (props) => (
    <div className={classes.WeatherSummary}>
        <WeatherImage/>
        <div className={classes.Info}>
            <h1>{props.weather.temp}°</h1>
            <h3>{props.weather.descriptionFull}</h3>
        </div>
    </div>
);

export default weatherSummary;