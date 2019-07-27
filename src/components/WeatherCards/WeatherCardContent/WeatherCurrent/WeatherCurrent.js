import React from 'react';
import classes from './WeatherCurrent.module.scss';

import WeatherSummary from '../../../UI/WeatherSummary/WeatherSummary';
import WeatherDetails from '../../../UI/WeatherDetails/WeatherDetails';

const weatherCurrent = () => (
    <div className={classes.WeatherCurrent}>
        <WeatherSummary/>
        <WeatherDetails/>
    </div>
);

export default weatherCurrent;