import React from 'react';
import classes from './WeatherCardHeader.module.scss';
import countries from '../../../static/countries.json';

import WeatherCardOptions from'./WeatherCardOptions/WeatherCardOptions';

const weatherCardHeader = (props) => (
    <div className={classes.WeatherCardHeader}>
        <h2>{`${props.location.city}, ${countries.find(country => country.code === props.location.country).name}`}</h2>
        <WeatherCardOptions delete={props.delete}/>
    </div>
);

export default weatherCardHeader;