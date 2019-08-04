import React from 'react';
import classes from './WeatherCardOptions.module.scss';

const weatherCardOptions = (props) => {
    const faStyleUp = 'fas fa-chevron-up';
    const faStyleDown = 'fas fa-chevron-down';
    const faStyleDelete = 'fas fa-trash-alt';
    
    return(
        <div className={classes.WeatherCardOptions}>
            <i className={[faStyleUp, classes.WeatherCardOption, classes.Up].join(' ')}
                onClick={props.promote}></i>
            <i className={[faStyleDown, classes.WeatherCardOption, classes.Down].join(' ')}
                onClick={props.demote}></i>
            <i className={[faStyleDelete, classes.WeatherCardOption, classes.Delete].join(' ')}
                onClick={props.delete}></i>
        </div>
    );
}

export default weatherCardOptions;