import React from 'react';
import classes from './WeatherCards.module.scss';

import WeatherCard from '../../containers/WeatherCard/WeatherCard';

const weatherCards = (props) => {
    let locationsToDisplay = props.locations.map((location, idx) => (
        <WeatherCard key={idx} location={location} delete={location => props.deleteCard(location)}/>));
    return(
        <div className={classes.WeatherCards}>
            {locationsToDisplay}
        </div>
    );
}
   
export default weatherCards;