import React from 'react';
import classes from './WeatherCards.module.scss';

import WeatherCard from '../../containers/WeatherCard/WeatherCard';

const weatherCards = () => (
    <div className={classes.WeatherCards}>
        <WeatherCard/>
        <WeatherCard/>
    </div>
);
   
export default weatherCards;