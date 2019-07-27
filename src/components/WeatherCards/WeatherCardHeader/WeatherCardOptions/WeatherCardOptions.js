import React from 'react';
import classes from './WeatherCardOptions.module.scss';

const weatherCardOptions = () => {
    const faStyleUp = 'fas fa-chevron-up';
    const faStyleDown = 'fas fa-chevron-down';
    const faStyleDelete = 'fas fa-trash-alt';
    
    return(
        <div className={classes.WeatherCardOptions}>
            <i className={[faStyleUp, classes.WeatherCardOption].join(' ')}></i>
            <i className={[faStyleDown, classes.WeatherCardOption].join(' ')}></i>
            <i className={[faStyleDelete, classes.WeatherCardOption].join(' ')}></i>
        </div>
    );
}

export default weatherCardOptions;