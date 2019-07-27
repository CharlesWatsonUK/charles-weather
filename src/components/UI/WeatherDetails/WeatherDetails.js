import React from 'react';
import classes from './WeatherDetails.module.scss'

import WeatherDetail from './WeatherDetail/WeatherDetail';


const weatherDetails = () => (
    <div className={classes.WeatherDetails}>
        <WeatherDetail info='15 mph, NE' iconClass='fas fa-wind'/>
        <WeatherDetail info='36%' iconClass='fas fa-water'/>
        <WeatherDetail info='370 kPa' iconClass='fas fa-tachometer-alt'/>
        <WeatherDetail info='3720' iconClass='fas fa-male'/>
    </div>
);

export default weatherDetails;