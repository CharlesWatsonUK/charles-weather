import React, {Component} from 'react';
import classes from './WeatherCards.module.scss';

import WeatherCard from '../../containers/WeatherCard/WeatherCard';

class WeatherCards extends Component {

    state = {
        locations: [
            {
                city: 'cosby',
                country: 'uk'
            }
        ]
    }

    render(){
        return(
            <div className={classes.WeatherCards}>
                <WeatherCard/>
                <WeatherCard/>
            </div>
        );
    }
}
   
export default WeatherCards;