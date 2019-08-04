import React, {Component} from 'react';
import classes from './Locations.module.scss';
import APIServices from '../../service/APIServices';
import LocalStorageServices from '../../service/LocalStorageServices';

import Button from '../../components/UI/Button/Button';
import AddLocation from '../AddLocation/AddLocation';
import Weather from '../../containers/Locations/Weather/Weather';
import MaxLocations from '../../components/AddLocation/MaxLocations/MaxLocations';
import { throwStatement } from '@babel/types';


class Locations extends Component {
    
    state = {
        weatherData: [],
        test: null,
        addLocationOpen: false,
        maxLocationsOpen: false,
        load: false
    }

    componentDidMount(){
        this.loadWeatherData();
        // Update weather data every 2 mins
        this.interval = setInterval(() => this.loadWeatherData(), 120000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    loadWeatherData = async() => {
        const promise = APIServices.fetchWeathers();
        await promise
            .then(data => {
                this.setState({
                    weatherData: data,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    newLocationHandler = () => {
        this.loadWeatherData();
    }

    addLocationHandler = (data) => {
        let weatherData = [...this.state.weatherData];
        let userState = LocalStorageServices.getUserState();
        weatherData.push(data);
        userState.locations.push(data.location);
        LocalStorageServices.setUserState(userState);
        this.setState({weatherData: weatherData});
    }
    
    deleteLocationHandler = (locationId) => {
        let weatherData = [...this.state.weatherData];
        let userState = LocalStorageServices.getUserState();
        const deleteIndex = weatherData.findIndex(location => location.location.id === locationId);
        userState.locations.splice(deleteIndex, 1);
        weatherData.splice(deleteIndex, 1);
        LocalStorageServices.setUserState(userState);
        this.setState({weatherData: weatherData});  
    }

    moveLocationHandler = (locationId, move) => {
        let weatherData = [...this.state.weatherData];
        let userState = LocalStorageServices.getUserState();
        const prevIndex = weatherData.findIndex(location => location.location.id === locationId);
        if(prevIndex + move < 0 || prevIndex + move > weatherData.length - 1){
            return;
        }else{
            weatherData = this.arraySwap(weatherData, prevIndex, prevIndex + move);
            userState.locations = this.arraySwap(userState.locations, prevIndex, prevIndex + move);
        }
        LocalStorageServices.setUserState(userState);
        this.setState({weatherData: weatherData});  
    }
    
    arraySwap = (arr, idx1, idx2) => {
        const tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
        return arr;
    }
    
    openCloseAddLocationHandler = () => {
        if(this.state.addLocationOpen){
            this.setState({addLocationOpen: false});
        }else{
            if(this.state.weatherData.length < 5){
                this.setState({addLocationOpen: true});
            }else{
                this.setState({maxLocationsOpen: true});
            }
        }
    }

    openCloseMaxLocationsHandler = () => {
        if(this.state.maxLocationsOpen){
            this.setState({maxLocationsOpen: false});
        }else{
            this.setState({maxLocationsOpen: true});
        }
    }

    render(){
        const locationsToDisplay = this.state.weatherData.map(
            location => <Weather 
                key={location.location.id}
                data={location}
                delete={this.deleteLocationHandler}
                move={this.moveLocationHandler}/>)
        return(
            <div className={classes.WeatherCards}>
                <MaxLocations
                    open={this.state.maxLocationsOpen}
                    close={this.openCloseMaxLocationsHandler}/>
                {locationsToDisplay}
                <Button 
                    type='Neutral'
                    className={classes.Button}
                    clicked={this.openCloseAddLocationHandler}>Add a location!
                </Button>
                <AddLocation
                    open={this.state.addLocationOpen}
                    close={this.openCloseAddLocationHandler}
                    addLocation={this.addLocationHandler}/> 
            </div>
        );
    }
}
   
export default Locations;