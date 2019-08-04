import React, {Component} from 'react';
import classes from './Weather.module.scss';

import WeatherSummary from '../../../components/Weather/WeatherSummary/WeatherSummary';
import WeatherHeader from '../../../components/Weather/WeatherHeader/WeatherHeader';
import WeatherDetails from '../../../components/Weather/WeatherDetails/WeatherDetails';
import LocalStorageServices from '../../../service/LocalStorageServices';

class Weather extends Component {
    
    delete = () => {
        let userState = LocalStorageServices.getUserState();
        const deleteIndex = userState.locations.findIndex(location => location.id === this.props.data.location.id);
        userState.locations.splice(deleteIndex, 1);
        LocalStorageServices.setUserState(userState);
        this.props.deleted();
    }

    render(){
        return(
            <div className={classes.Weather}>
                <WeatherHeader 
                    location={this.props.data.location}
                    delete={this.delete}/>
                <div className={classes.WeatherContent}>
                    <WeatherSummary className={classes.WeatherSummary} weather={this.props.data}/>
                    <WeatherDetails className={classes.WeatherDetails} weather={this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Weather;