import React from 'react';
import classes from './ForecastTimes.module.scss';
import UtilsServices from '../../../../../service/UtilsServices';

import ForecastTime from './ForecastTime/ForecastTime';

const forecastTimes = (props) => {
    
    const forecastTimesToDisplay = UtilsServices.padTimesArray(props.data).map((data, idx) => 
        <ForecastTime
                    key={idx}
                    data={data}/>);
  
    return(
        <div className={[classes.ForecastTimes, props.className].join(' ')}>
            {forecastTimesToDisplay}
        </div>
    );
   
};

export default forecastTimes;