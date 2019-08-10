import React, {Component} from 'react';
import classes from './Forecast.module.scss';
import APIServices from '../../service/APIServices';

import AlertModal from '../../components/UI/AlertModal/AlertModal';
import ForecastNow from '../../components/Forecast/ForecastNow/ForecastNow';
import ForecastDays from '../../components/Forecast/ForecastDays/ForecastDays';
import ForecastHeader from '../../components/Forecast/ForecastHeader/ForecastHeader';

class Forecast extends Component{
    
    state = {
        forecastData: [],
        loading: false
    }
    
    componentDidMount(){
        this.loadForecastData();
    }
    
    loadForecastData = async() => {
        this.setState({loading: true});
        const promise = APIServices.fetchForecast(this.props.currentWeather.location);
        await promise
            .then(data => {
                this.setState({forecastData: data});
            })
            .catch(err => {
                console.log(err);
            }).finally(() => {
                this.setState({loading: false});
            });
    }
    
    render(){ 
        
        let dayNightStyle;
        if(this.props.currentWeather.iconCode.indexOf('d') >= 0){
            dayNightStyle = 'WeatherDay';
        }else{
            dayNightStyle = 'WeatherNight';
        }
        
        return(
            <AlertModal open={this.props.open} close={this.props.close} className={classes.Modal}>
                <div className={[classes.Forecast, classes[dayNightStyle]].join(' ')}>
                    <ForecastHeader
                        data={this.props.currentWeather}
                        close={this.props.close}/>
                    <ForecastNow 
                        data={this.props.currentWeather}
                        className={classes.ForecastNow}/>
                    <ForecastDays 
                        data={this.state.forecastData}
                        className={classes.ForecastDays}/>
                    
                </div>
            </AlertModal>
        );
    }
   
}

export default Forecast;