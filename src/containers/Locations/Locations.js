import React, {Component} from 'react';
import classes from './Locations.module.scss';
import APIServices from '../../service/APIServices';

import Button from '../../components/UI/Button/Button';
import AddLocation from '../AddLocation/AddLocation';
import Weather from '../../containers/Locations/Weather/Weather';

class Locations extends Component {
    
    state = {
        weatherData: [],
        test: null,
        addLocationOpen: false,
        load: false
    }

    componentDidMount(){
        this.loadWeatherData();
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
    
    openCloseAddLocationHandler = () => {
        if(this.state.addLocationOpen){
            this.setState({addLocationOpen: false});
            this.newLocationHandler();
        }else{
            this.setState({addLocationOpen: true});
        }
    }

    render(){
        const locationsToDisplay = this.state.weatherData.map(
            location => <Weather 
                key={location.location.id}
                data={location}
                deleted={this.loadWeatherData}/>)
        return(
            <div className={classes.WeatherCards}>
                {locationsToDisplay}
                <Button 
                    type='Neutral'
                    className={classes.Button}
                    clicked={this.openCloseAddLocationHandler}>Add a location!
                </Button>
                <AddLocation
                    open={this.state.addLocationOpen}
                    close={this.openCloseAddLocationHandler}/> 
            </div>
        );
    }
}
   
export default Locations;