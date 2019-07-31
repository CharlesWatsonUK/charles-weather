import React from 'react';
import classes from './WeatherCard.module.scss';

import WeatherCardHeader from '../../components/WeatherCards/WeatherCardHeader/WeatherCardHeader';
import WeatherCardContent from '../../components/WeatherCards/WeatherCardContent/WeatherCardContent';

const weatherCard = (props) => (
    <div className={classes.WeatherCard}>
        <WeatherCardHeader 
            location={{city: props.location.city, country: props.location.country}}
            delete={props.delete}
        />
        <WeatherCardContent
            currentWeather={props.location.weather}
        />
    </div>
);

export default weatherCard;