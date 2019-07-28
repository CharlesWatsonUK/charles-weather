import React from 'react';
import classes from './WeatherCardContent.module.scss';

import WeatherCurrent from './WeatherCurrent/WeatherCurrent';

const weatherCardContent = (props) => (
    <div>
        <WeatherCurrent weather={props.currentWeather}/>
    </div>
);

export default weatherCardContent;