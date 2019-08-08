import React, {Component} from 'react';
import classes from './Forecast.module.scss';
import APIServices from '../../service/APIServices';

import AlertModal from '../../components/UI/AlertModal/AlertModal';
import ForecastNow from '../../components/Forecast/ForecastNow/ForecastNow';
import ForecastDays from '../../components/Forecast/ForecastDays/ForecastDays';

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
        return(
            <AlertModal open={this.props.open} close={this.props.close} className={classes.Modal}>
                <div className={classes.Forecast}>
                    <h3>{this.props.currentWeather.location.name} Forecast</h3>
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