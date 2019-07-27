import React from 'react';
import classes from './WeatherCardHeader.module.scss';

const weatherCardHeader = () => (
    <div className={classes.WeatherCardHeader}>
        <h3>Location</h3>
        <p>up</p>
        <p>down</p>
        <p>del</p>
    </div>
);

export default weatherCardHeader;