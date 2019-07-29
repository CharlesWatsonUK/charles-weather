import React from 'react';

import WeatherCurrent from './WeatherCurrent/WeatherCurrent';

const weatherCardContent = (props) => (
    <div>
        <WeatherCurrent weather={props.currentWeather}/>
    </div>
);

export default weatherCardContent;