import React from 'react';
import classes from './WeatherDetails.module.scss'

import WeatherDetail from './WeatherDetail/WeatherDetail';

const weatherDetails = (props) => {
    const windInfo = `${props.weather.windSpeed} M/S, ${props.weather.windDirection}°`;
    const humidity = `${props.weather.humidity}%`;
    const pressure = `${props.weather.pressure} hPa`;

    return(
        <div className={[classes.WeatherDetails, props.className].join(' ')}>
            <WeatherDetail key='wind' info={windInfo} iconClass='fas fa-wind'/>
            <WeatherDetail key='humidity' info={humidity} iconClass='fas fa-water'/>
            <WeatherDetail key='pressure' info={pressure} iconClass='fas fa-tachometer-alt'/>
            <WeatherDetail key='population' info='0' iconClass='fas fa-male'/>
        </div>
    );
    
}

export default weatherDetails;