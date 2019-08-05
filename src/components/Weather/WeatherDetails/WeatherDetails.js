import React from 'react';
import classes from './WeatherDetails.module.scss'

import WeatherDetail from './WeatherDetail/WeatherDetail';

const weatherDetails = (props) => {
    const windInfo = `${props.weather.windSpeed.toFixed(1)} m/s, ${props.weather.windDirection.toFixed(0)}°`;
    const humidity = `${props.weather.humidity.toFixed(0)}%`;
    const pressure = `${props.weather.pressure.toFixed(0)} hPa`;

    return(
        <div className={[classes.WeatherDetails, props.className].join(' ')}>
            <WeatherDetail key='wind' info={windInfo} iconClass='fas fa-wind'/>
            <WeatherDetail key='humidity' info={humidity} iconClass='fas fa-water'/>
            <WeatherDetail key='pressure' info={pressure} iconClass='fas fa-tachometer-alt'/>
        </div>
    );
    
}

export default weatherDetails;