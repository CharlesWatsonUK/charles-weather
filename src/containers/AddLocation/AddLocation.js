import React, {Component} from 'react';
import classes from './AddLocation.module.scss';
import APIServices from '../../service/APIServices';
import Location from '../../template/Location';

import AlertModal from '../../components/UI/AlertModal/AlertModal';
import VerifyLocation from '../../components/AddLocation/VerifyLocation/VerifyLocation';
import AddLocationForm from '../../components/AddLocation/AddLocationForm/AddLocationForm';
import Weather from '../../template/Weather';
import LocalStorageServices from '../../service/LocalStorageServices';

const initState = {
    searchLocation: new Location(),
    verifiedLocationWeatherData: new Weather(),
    locationValid: false,
    showResult: false
}

class AddLocation extends Component {

    state = initState;

    cityChangeHandler = (e) => {
        let searchLocation = {...this.state.searchLocation};
        searchLocation.city = e.target.value;
        this.setState({
            searchLocation: searchLocation,
            showResult: false
        });
    }

    countryChangeHandler = (e) => {
        let searchLocation = {...this.state.searchLocation};
        searchLocation.country = e.target.value;
        this.setState({
            searchLocation: searchLocation,
            showResult: false
        });  
    }

    verifyLocation = () => {
        const promise = APIServices.fetchWeather(this.state.searchLocation);
        promise
            .then(data => {
                this.setState({
                    verifiedLocationWeatherData: data,
                    locationValid: true,
                    showResult: true
                });
            })
            .catch(err => {
                this.setState({
                    locationValid: false,
                    showResult: true
                });
            });
    }

    closeHandler = () => {
        this.props.close();
        this.setState(initState);
    }

    saveLocationHandler = () => {
        let userState = LocalStorageServices.getUserState();
        userState.locations.push(this.state.verifiedLocationWeatherData.location);
        LocalStorageServices.setUserState(userState);
        this.setState(initState);
        this.props.close();
    }

    render(){
        return(
            <AlertModal open={this.props.open} close={this.props.close}>
                <div className={classes.AddLocation}>
                    <h3>Add a new location</h3>
                    <AddLocationForm
                        countryChange={this.countryChangeHandler}
                        cityChange={this.cityChangeHandler}
                        verify={this.verifyLocation}/>
                    {this.state.showResult ? 
                        this.state.locationValid ? 
                            <VerifyLocation 
                                data={this.state.verifiedLocationWeatherData}
                                save={this.saveLocationHandler}
                                cancel={this.closeHandler}/>
                            : <h3>Location not found</h3>
                        : null
                    }
                </div>
            </AlertModal>
        );
    } 
}

export default AddLocation;