import React from 'react';
import classes from './WeatherImage.module.scss';
import sunIcon from '../../../../assets/weather-icons/sun.svg';

const weatherImage = () => (
    <div className={classes.WeatherImage}>
        <img src={sunIcon}/>
    </div>
);

export default weatherImage;