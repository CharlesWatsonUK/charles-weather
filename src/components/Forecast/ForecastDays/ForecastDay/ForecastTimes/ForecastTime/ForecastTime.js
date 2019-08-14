import React from 'react';
import classes from './ForecastTime.module.scss';
import UtilsServices from '../../../../../../service/UtilsServices';

import WeatherImage from '../../../../../UI/WeatherImage/WeatherImage';

const forecastTime = (props) => {
    
    let content = null;
    let dayNightStyle = 'DayTime';
    if(props.data !== null){
        const hours = UtilsServices.formatTimeVal(props.data.dt.getHours());
        const mins = UtilsServices.formatTimeVal(props.data.dt.getMinutes());
        content = <div className={classes.ForecastTimeContent}>
                    <WeatherImage 
                        icon={props.data.iconCode}
                        className={classes.WeatherImage}/>
                    <div>
                        <p>{`${props.data.temp.toFixed(1)}°`}</p>
                        <p className={classes.Time}>{`${hours}:${mins}`}</p>
                    </div>
                </div>
        
        if(props.data.iconCode.indexOf('n') >= 0){
            dayNightStyle = 'NightTime';
        }
    }
    
    return(
        <div className={[classes.ForecastTime, classes[dayNightStyle]].join(' ')}>
            {content}
        </div>
    );
   
};

export default forecastTime;