import React, {Component} from 'react';
import classes from './AddLocation.module.scss';
import countries from '../../static/countries.json';
import APIServices from '../../service/api/APIServices';

import AlertModal from '../UI/AlertModal/AlertModal';
import VerifyLocation from './VerifyLocation/VerifyLocation';

class AddLocation extends Component {

    state = {
        location: {
            country: 'United Kingdom',
            city: 'London'
        },
        weather: null,
        locationValid: false
    }

    timeout = null;
    
    updateCountryHandler = (e) => {
        let state = {...this.state};
        state.location.country = e.target.value;
        this.setState({state});
        this.submitHandler();
    }
    
    updateCityHandler = (e) => {
        let state = {...this.state};
        state.location.city = e.target.value;
        this.setState({state}); 
    }

    stoppedTypingHandler = () => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.submitHandler();
        }, 1000);
    }

    submitHandler(){
        console.log(this.state.location)
        this.getCurrentWeather();
    }

    async getCurrentWeather(){
        let promise = APIServices.getWeather(this.state.location.city, this.state.location.country, 'metric');
        await promise
        .then((res) => {
            const cleanedRes = APIServices.cleanWeatherData(res); 
            this.setState({weather: cleanedRes, locationValid: true});
        })
        .catch((err) => {
            console.log(err);
            this.setState({weather: null, locationValid: false});
        });
    } 

    render(){
        const countryOptions = countries.map((country, idx) => (
            <option key={idx}>{country.name}</option>
        ));

        return(
            <AlertModal open={this.props.open} close={this.props.close}>
                <div className={classes.AddLocation}>
                    <h3>Add a new location</h3>
                    <div className={classes.Form}>
                        <div className={classes.FormItem}>
                            <label>Country</label>
                            <select onChange={this.updateCountryHandler} defaultValue='United Kingdom'>
                                {countryOptions}
                            </select>
                        </div>
                        <div className={classes.FormItem}>
                            <label>City</label>
                            <input type='text' onChange={this.updateCityHandler} onKeyUp={this.stoppedTypingHandler} defaultValue='London'/>
                        </div>
                    </div>
                    {this.state.locationValid ? 
                        <VerifyLocation location={this.state.location} weather={this.state.weather}/>
                        : <h3>Location not found</h3>}
                </div>
            </AlertModal>
        );
    } 
}

export default AddLocation;