import React, {Component} from 'react';
import classes from './WeatherCard.module.scss';

import WeatherImage from './WeatherImage/WeatherImage';
import WeatherCardHeader from './WeatherCardHeader/WeatherCardHeader';
import WeatherCardContent from './WeatherCardContent/WeatherCardContent';

class WeatherCard extends Component {

    render(){
        return(
            <div className={classes.WeatherCard}>
                <WeatherCardHeader/>
                <WeatherCardContent/>
            </div>
        );
    }
}

export default WeatherCard;