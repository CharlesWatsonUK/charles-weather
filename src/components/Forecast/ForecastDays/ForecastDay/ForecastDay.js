import React from 'react';
import classes from './ForecastDay.module.scss'

import ForecastDaySummary from './ForecastDaySummary/ForecastDaySummary';
import ForecastTimes from './ForecastTimes/ForecastTimes';


const forecastDay = (props) => {
    return(
        <div className={classes.ForecastDay}>
            <ForecastDaySummary 
                className={classes.ForecastDaySummary}
                data={props.data}/>
            <ForecastTimes
                className={classes.ForecastTimes}
                data={props.data}/>
        </div>
    )
}

export default forecastDay;