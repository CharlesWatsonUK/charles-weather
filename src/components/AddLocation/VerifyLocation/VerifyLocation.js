import React from 'react';
import classes from './VerifyLocation.module.scss';
import countries from '../../../static/countries.json';

import WeatherSummary from '../../Weather/WeatherSummary/WeatherSummary';
import Button from '../../UI/Button/Button';

const verifyLocation = (props) => {
    const countryName = countries.find(country => country.code === props.data.location.country).name;
    return(
        <div className={classes.VerifyLocation}>
            <h3>{`${props.data.location.city}, ${countryName}`}</h3>
            <WeatherSummary weather={props.data} className={classes.WeatherSummary}/>
            <div className={classes.Buttons}>
                <Button type='Success' className={classes.Button} clicked={props.save}>Save</Button>
                <Button type='Danger' className={classes.Button} clicked={props.cancel}>Cancel</Button>
            </div>
        </div> 
    );        
}

export default verifyLocation;