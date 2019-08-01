import React from 'react';
import classes from './WeatherDetail.module.scss';

const weatherDetail = (props) => {
    return(
        <div className={classes.WeatherDetail}>
            <i className={props.iconClass}></i>
            <p>{props.info}</p>
        </div>
    );
}

export default weatherDetail;