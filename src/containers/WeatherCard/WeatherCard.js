import React, {Component} from 'react';
import classes from './WeatherCard.module.scss';
import APIServices from '../../service/api/APIServices';

import WeatherCardHeader from '../../components/WeatherCards/WeatherCardHeader/WeatherCardHeader';
import WeatherCardContent from '../../components/WeatherCards/WeatherCardContent/WeatherCardContent';
import Weather from '../../template/Weather';

class WeatherCard extends Component {

    state = {
        currentWeather: new Weather()
    }

    componentDidMount(){
        this.updateCurrentWeather();
    }



    async updateCurrentWeather(){
        const location = this.state.location;
        let promise = APIServices.getWeather(this.props.location.city, this.props.location.country, 'metric');
        await promise.then((res) => {
            const cleanedRes = APIServices.cleanWeatherData(res); 
            this.setState({currentWeather: cleanedRes});
            console.log(this.state);
        });
    }

    render(){
        return(
            <div className={classes.WeatherCard}>
                <WeatherCardHeader location={this.props.location.city}/>
                <WeatherCardContent currentWeather={this.state.currentWeather}/>
            </div>
        );
    }
}

export default WeatherCard;