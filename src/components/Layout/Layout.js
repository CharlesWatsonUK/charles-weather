import React, {Component} from 'react';

import WeatherCards from '../WeatherCards/WeatherCards';
import Toolbar from '../Nav/Toolbar/Toolbar';
import Sidedrawer from '../Nav/Sidedrawer/Sidedrawer';
import AddLocation from '../AddLocation/AddLocation';

class Layout extends Component {
    
    state = {
        sidedrawerOpen: false,
        addLocationOpen: true,
        locations: [],
        units: 'metric'
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

    newLocationHandler = (location) => {
        let locations = [...this.state.locations];
        locations.push(location);
        this.setState({locations: locations});
        this.openCloseAddLocationHandler(); 
    }

    deleteWeatherCardHandler = (locationToDelete) => {
        let locations = [...this.state.locations];
        locations.splice(locations.find((location) => location === locationToDelete));
        this.setState({locations: locations});
    }

    render(){
        return(
            <div>
                <Toolbar 
                    openCloseSidedrawer={this.openCloseSidedrawerHandler}
                    addLocation={this.openCloseAddLocationHandler}
                />
                <AddLocation 
                    open={this.state.addLocationOpen}
                    close={this.openCloseAddLocationHandler}
                    saveLocation={this.newLocationHandler}
                />
                <Sidedrawer 
                    open={this.state.sidedrawerOpen}
                    closeSidedrawer={this.openCloseSidedrawerHandler}
                />
                <WeatherCards
                    locations={this.state.locations}
                    deleteCard={this.deleteWeatherCardHandler}
                />
            </div>
        );
    }

}

export default Layout;
