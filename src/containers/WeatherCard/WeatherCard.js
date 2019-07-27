import React, {Component} from 'react';
import classes from './WeatherCard.module.scss';

import WeatherImage from '../../components/UI/WeatherImage/WeatherImage';
import WeatherCardHeader from '../../components/WeatherCards/WeatherCardHeader/WeatherCardHeader';
import WeatherCardContent from '../../components/WeatherCards/WeatherCardContent/WeatherCardContent';

class WeatherCard extends Component {

    state = {
        location: 'Cosby'
    }

    render(){
        return(
            <div className={classes.WeatherCard}>
                <WeatherCardHeader location={this.state.location}/>
                <WeatherCardContent/>
            </div>
        );
    }
}

export default WeatherCard;