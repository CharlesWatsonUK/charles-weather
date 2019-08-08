import React from 'react';
import classes from './ForecastDay.module.scss'

import ForecastDaySummary from './ForecastDaySummary/ForecastDaySummary';


const forecastDay = (props) => {
    return(
        <div className={classes.ForecastDay}>
            
            <ForecastDaySummary 
                className={classes.ForecastDaySummary}
                data={props.data}/>
           
           
        </div>
    )
}

export default forecastDay;