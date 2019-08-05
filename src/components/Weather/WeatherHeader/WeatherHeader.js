import React from 'react';
import classes from './WeatherHeader.module.scss';
import countries from '../../../static/countries.json';

import WeatherOptions from'./WeatherOptions/WeatherOptions';

const weatherHeader = (props) => (
    <div className={classes.WeatherCardHeader}>
        <h2>{`${props.location.city}, ${countries.find(country => country.code === props.location.country).name}`}</h2>
        <WeatherOptions 
            delete={props.delete}
            promote={props.promote}
            demote={props.demote}/>
    </div>
);

export default weatherHeader;