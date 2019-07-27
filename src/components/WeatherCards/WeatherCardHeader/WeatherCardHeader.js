import React from 'react';
import classes from './WeatherCardHeader.module.scss';

import WeatherCardOptions from'./WeatherCardOptions/WeatherCardOptions';

const weatherCardHeader = (props) => (
    <div className={classes.WeatherCardHeader}>
        <h2>{props.location}</h2>
        <WeatherCardOptions/>
    </div>
);

export default weatherCardHeader;