import React from 'react';
import classes from './ForecastDays.module.scss';

import ForecastDay from './ForecastDay/ForecastDay';

const forecastDays = (props) => {
    
    const dayList = props.data.map(day =>
        <ForecastDay 
            key={day[0].dt}
            data={day}/>
    );
    
    return(
        <div className={[classes.ForecastDays, props.className].join(' ')}>
            {dayList}
        </div>
    )
};

export default forecastDays;

