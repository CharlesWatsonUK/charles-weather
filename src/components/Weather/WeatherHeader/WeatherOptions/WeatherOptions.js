import React from 'react';
import classes from './WeatherOptions.module.scss';

const weatherOptions = (props) => {
    const faStyleUp = 'fas fa-chevron-up';
    const faStyleDown = 'fas fa-chevron-down';
    const faStyleDelete = 'fas fa-trash-alt';
    
    return(
        <div className={classes.WeatherOptions}>
            <i className={[faStyleUp, classes.WeatherOption, classes.Up].join(' ')}
                onClick={props.promote}></i>
            <i className={[faStyleDown, classes.WeatherOption, classes.Down].join(' ')}
                onClick={props.demote}></i>
            <i className={[faStyleDelete, classes.WeatherOption, classes.Delete].join(' ')}
                onClick={props.delete}></i>
        </div>
    );
}

export default weatherOptions;