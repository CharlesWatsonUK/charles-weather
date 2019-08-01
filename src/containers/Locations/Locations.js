import React, {Component} from 'react';
import classes from './Locations.module.scss';
import APIServices from '../../service/APIServices';

import Weather from './Weather/Weather';
import Button from '../../components/UI/Button/Button';
import AddLocation from '../AddLocation/AddLocation';

class Locations extends Component {
    
    state = {
        weatherData: [],
        addLocationOpen: false
    }

    componentDidMount(){
        this.loadWeatherData();
    }

    loadWeatherData = () => {
        APIServices.fetchWeathers()
            .then(res => this.setState({weatherData: res}));
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
        const locationsToDisplay = this.state.weatherData.map((location) => 
                <Weather 
                    key={location.location.id}
                    data={location}
                    delete={this.loadWeatherData}/>);
        console.log(locationsToDisplay)
            

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