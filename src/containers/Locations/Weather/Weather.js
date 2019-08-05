import React, {Component} from 'react';
import classes from './Weather.module.scss';

import WeatherSummary from '../../../components/Weather/WeatherSummary/WeatherSummary';
import WeatherHeader from '../../../components/Weather/WeatherHeader/WeatherHeader';
import WeatherDetails from '../../../components/Weather/WeatherDetails/WeatherDetails';

class Weather extends Component {
    
    delete = () => {
        this.props.delete(this.props.data.location.id);
    }

    promote = () => {
        this.props.move(this.props.data.location.id, -1);
    }

    demote = () => {
        this.props.move(this.props.data.location.id, 1);
    }

    render(){
        let dayNightClass = '';
        if(this.props.data.iconCode.indexOf('d') >= 0){
            dayNightClass = 'WeatherDay';
        }else{
            dayNightClass = 'WeatherNight';
        }
        
        return(
            <div className={[classes.Weather, classes[dayNightClass]].join(' ')}>
                <WeatherHeader 
                    location={this.props.data.location}
                    delete={this.delete}
                    promote={this.promote}
                    demote={this.demote}/>
                <div className={classes.WeatherContent}>
                    <WeatherSummary className={classes.WeatherSummary} weather={this.props.data}/>
                    <WeatherDetails className={classes.WeatherDetails} weather={this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Weather;