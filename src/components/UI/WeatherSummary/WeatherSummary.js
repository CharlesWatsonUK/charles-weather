import React from 'react';
import classes from './WeatherSummary.module.scss';

import WeatherImage from './WeatherImage/WeatherImage';

const weatherSummary = () => (
    <div className={classes.WeatherSummary}>
        <WeatherImage/>
        <div className={classes.Info}>
            <h1>22°C</h1>
            <h3>Clear and Sunny</h3>
        </div>
    </div>
);

export default weatherSummary;