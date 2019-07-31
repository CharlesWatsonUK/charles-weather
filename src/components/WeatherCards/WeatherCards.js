import React from 'react';
import classes from './WeatherCards.module.scss';

import WeatherCard from '../../containers/WeatherCard/WeatherCard';
import Button from '../UI/Button/Button';

const weatherCards = (props) => {
    let locationsToDisplay = props.locations.map((location, idx) => (
        <WeatherCard key={idx} location={location} delete={() => props.deleteCard(location)}/>));
    return(
        <div className={classes.WeatherCards}>
            {locationsToDisplay}
            <Button 
                type='Neutral'
                className={classes.Button}
                clicked={props.addLocation}>Add a location!
            </Button>
        </div>
    );
}
   
export default weatherCards;