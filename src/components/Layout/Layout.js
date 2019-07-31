import React, {Component} from 'react';
import APIServices from '../../service/api/APIServices';
import Weather from '../../template/Weather';

import WeatherCards from '../WeatherCards/WeatherCards';
import Toolbar from '../Nav/Toolbar/Toolbar';
import Sidedrawer from '../Nav/Sidedrawer/Sidedrawer';
import AddLocation from '../AddLocation/AddLocation';
import Welcome from '../Welcome/Welcome';

const initState = {
    welcomeOpen: true,
    sidedrawerOpen: false,
    addLocationOpen: false,
    locations: [],
    units: 'metric',
    apiKey: null
}

class Layout extends Component {
    
    constructor(props){
        super(props);

        this.loadUserState()
    }

    loadUserState = () => {
        const userState = JSON.parse(localStorage.getItem('charles-weather'));
        console.log(userState)
        if(userState != null){
            const locations = userState.locations.map(location => {
                return {
                    city: location.city,
                    country: location.country,
                    weather: new Weather()
                };
            });
            this.state = {
                welcomeOpen: false,
                sidedrawerOpen: false,
                addLocationOpen: false,
                locations: locations,
                units:'metric',
                apiKey: userState.apiKey
            };
        }else{
            this.state = initState;
        }
    }

    keyChangeHandler = (e) => {
        const apiKey = e.target.value;
        this.setState({apiKey: apiKey});
    }
    
    saveUserState = () => {
        const locations = [... this.state.locations];
        const locationsToSave = locations.map(location => {
            return {
                city: location.city,
                country: location.country
            };
        });
        const userState = {
            locations: locationsToSave,
            units: this.state.units,
            apiKey: this.state.apiKey
        }
        localStorage.setItem('charles-weather', JSON.stringify(userState));
        this.loadUserState();
        this.closeWelcomeHandler();
    }

    componentDidMount(){
        this.refreshAll();
    }

    openCloseSidedrawerHandler = () => {
        if(this.state.sidedrawerOpen){
            this.setState({sidedrawerOpen: false});
        }else{
            this.setState({sidedrawerOpen: true});
        }
    }

    openCloseAddLocationHandler = () => {
        if(this.state.addLocationOpen){
            this.setState({addLocationOpen: false});
        }else{
            this.setState({addLocationOpen: true});
        }
    }

    closeWelcomeHandler = () => {
        this.setState({welcomeOpen: false});
    }

    refreshAll = async() => {
        let locations = [... this.state.locations];
        locations.forEach(async(locaton) => {
            await this.refreshLocation(locaton.city, locaton.country);
        });
    }

    refreshLocation = async(city, country) => {
        const promise = APIServices.getWeather(city, country, 'metric', this.state.apiKey);
        return promise.then((res) => {
            const cleanedRes = APIServices.cleanWeatherData(res);
            let locations = [...this.state.locations];
            const refreshIndex = locations.findIndex(location => location.city === city && location.country === country);
            if(refreshIndex >= 0){
                locations[refreshIndex].weather = cleanedRes;
            }else{
                locations.push({
                    city: city,
                    country: country,
                    weather: cleanedRes
                });
            }
            this.setState({locations: locations});
            this.saveUserState();
        });
    }

    addLocationHandler = (location) => {
        this.refreshLocation(location.city, location.country);
        this.openCloseAddLocationHandler();  
    }

    deleteLocationHandler = (locationToDelete) => {
        let locations = [...this.state.locations];
        locations.splice(
            locations.findIndex(
                (location) => location.city === locationToDelete.city && location.country === locationToDelete.country)
        , 1);
        this.setState({locations: locations});
        this.saveUserState();
    }

    render(){
        return(
            <div>
                <Toolbar 
                    openCloseSidedrawer={this.openCloseSidedrawerHandler}
                    addLocation={this.openCloseAddLocationHandler}
                />
                <Welcome
                    open={this.state.welcomeOpen}
                    keyChange={this.keyChangeHandler}
                    submit={this.saveUserState}/>
                <AddLocation 
                    open={this.state.addLocationOpen}
                    close={this.openCloseAddLocationHandler}
                    saveLocation={this.addLocationHandler}
                    apiKey={this.state.apiKey}
                />
                <Sidedrawer 
                    open={this.state.sidedrawerOpen}
                    closeSidedrawer={this.openCloseSidedrawerHandler}
                />
                <WeatherCards
                    locations={this.state.locations}
                    deleteCard={this.deleteLocationHandler}
                    addLocation={this.openCloseAddLocationHandler}
                />
            </div>
        );
    }

}

export default Layout;