import React from 'react';
import classes from './WeatherCurrent.module.scss';

import WeatherSummary from '../../../UI/WeatherSummary/WeatherSummary';
import WeatherDetails from '../../../UI/WeatherDetails/WeatherDetails';

const weatherCurrent = (props) => (
    <div className={classes.WeatherCurrent}>
        <WeatherSummary weather={props.weather} className={classes.WeatherSummary}/>
        <WeatherDetails weather={props.weather}/>
    </div>
);

export default weatherCurrent;