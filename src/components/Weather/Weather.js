import React, {Component} from 'react';
import classes from './Weather.module.scss';

import WeatherSummary from './WeatherSummary/WeatherSummary';
import WeatherHeader from './WeatherHeader/WeatherHeader';
import WeatherDetails from './WeatherDetails/WeatherDetails';

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

    forecast = () => {
        this.props.forecast(this.props.data.location.id);
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
                    <WeatherSummary 
                        className={classes.WeatherSummary} 
                        weather={this.props.data}
                        forecast={this.forecast}
                        forecastOption={true}/>
                    <WeatherDetails 
                        className={classes.WeatherDetails} 
                        weather={this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Weather;