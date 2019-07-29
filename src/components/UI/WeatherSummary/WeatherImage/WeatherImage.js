import React from 'react';
import classes from './WeatherImage.module.scss';

import icon01d from '../../../../assets/weather-icons/01d.svg';
import icon01n from '../../../../assets/weather-icons/01n.svg';
import icon02d from '../../../../assets/weather-icons/02d.svg';
import icon02n from '../../../../assets/weather-icons/02n.svg';
import icon03d from '../../../../assets/weather-icons/03d.svg';
import icon04d from '../../../../assets/weather-icons/04d.svg';
import icon09d from '../../../../assets/weather-icons/09d.svg';
import icon10d from '../../../../assets/weather-icons/10d.svg';
import icon10n from '../../../../assets/weather-icons/01n.svg';
import icon11d from '../../../../assets/weather-icons/11d.svg';
import icon13d from '../../../../assets/weather-icons/13d.svg';
import icon50d from '../../../../assets/weather-icons/13d.svg';

const weatherImage = (props) => {
    
    let iconName;
    switch(props.icon){
        case '01d': iconName = icon01d; break;
        case '01n': iconName = icon01n; break;
        case '02d': iconName = icon02d; break;
        case '02n': iconName = icon02n; break;
        case '03d': iconName = icon03d; break;
        case '03n': iconName = icon03d; break;
        case '04d': iconName = icon04d; break;
        case '04n': iconName = icon04d; break;
        case '09d': iconName = icon09d; break;
        case '09n': iconName = icon09d; break;
        case '10d': iconName = icon10d; break;
        case '10n': iconName = icon10n; break;
        case '11d': iconName = icon11d; break;
        case '11n': iconName = icon11d; break;
        case '13d': iconName = icon13d; break;
        case '13n': iconName = icon13d; break;
        case '50d': iconName = icon50d; break;
        case '50n': iconName = icon50d; break;
        default: iconName = icon02d;
    }

    return(
        <div className={classes.WeatherImage}>
            <img src={iconName} alt={iconName}/>
        </div>
    );
}

export default weatherImage;