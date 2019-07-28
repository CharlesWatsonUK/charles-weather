import React, {Component} from 'react';
import classes from './WeatherCards.module.scss';

import WeatherCard from '../../containers/WeatherCard/WeatherCard';
import Weather from '../../template/Weather';

class WeatherCards extends Component {

    state = {
        locations: [
            {
                city: 'Cosby',
                country: 'UK'
            },
            {
                city: 'Marbella',
                country: 'ES'
            }
        ]
    }

    render(){
        const locations = [...this.state.locations];
        let locationsToDisplay = locations.map((location, idx) => (
            <WeatherCard key={idx} location={location}/>));
        return(
            <div className={classes.WeatherCards}>
                {locationsToDisplay}
            </div>
        );
    }
}
   
export default WeatherCards;