import React from 'react';
import classes from './WeatherCardContent.module.scss';

import WeatherCurrent from './WeatherCurrent/WeatherCurrent';

const weatherCardContent = () => (
    <div>
        <WeatherCurrent/>
    </div>
);

export default weatherCardContent;