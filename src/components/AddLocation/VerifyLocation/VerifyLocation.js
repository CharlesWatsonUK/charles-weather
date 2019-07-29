import React, {Component} from 'react';
import classes from './VerifyLocation.module.scss';


import WeatherSummary from '../../UI/WeatherSummary/WeatherSummary';

class VerifyLocation extends Component {
     
    render(){
        return(
            <div className={classes.VerifyLocation}>
                <h3>{`${this.props.location.city}, ${this.props.location.country}`}</h3>
                <WeatherSummary weather={this.props.weather}/>
            </div>
        )        
    }
}

export default VerifyLocation;