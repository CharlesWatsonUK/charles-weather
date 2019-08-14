import React from 'react';
import classes from './ForecastHeader.module.scss';
import countries from '../../../static/countries.json';
import UtilsServices from '../../../service/UtilsServices';

const forecastHeader = (props) => {
    
    const hours = UtilsServices.formatTimeVal(props.data.dt.getHours());
    const mins = UtilsServices.formatTimeVal(props.data.dt.getMinutes());

    return(
        <div className={[classes.ForecastHeader, props.className].join(' ')}>
            <div className={classes.Title}>
                <h4 className={classes.Location}>{props.data.location.city+', '+countries.find(country => country.code === props.data.location.country).name}</h4>
                <h4 className={classes.Time}>{`${hours}:${mins}`}</h4>
            </div>
            <div className={classes.ExitIcon}>
                <i className="fas fa-times" onClick={props.close}></i>
            </div>
        </div>
    );
   
}

export default forecastHeader;