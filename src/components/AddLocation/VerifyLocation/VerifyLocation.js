import React from 'react';
import classes from './VerifyLocation.module.scss';

import WeatherSummary from '../../UI/WeatherSummary/WeatherSummary';
import Button from '../../UI/Button/Button';

const verifyLocation = (props) => (
    <div className={classes.VerifyLocation}>
        <h3>{`${props.location.city}, ${props.location.country}`}</h3>
        <WeatherSummary weather={props.weather} className={classes.WeatherSummary}/>
        <div className={classes.Buttons}>
            <Button type='Success' className={classes.Button} clicked={props.save}>Save</Button>
            <Button type='Danger' className={classes.Button} clicked={props.cancel}>Cancel</Button>
        </div>
    </div>         
);

export default verifyLocation;