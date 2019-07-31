import React, {Component} from 'react';
import classes from './AddLocation.module.scss';
import countries from '../../static/countries.json';
import APIServices from '../../service/api/APIServices';

import AlertModal from '../UI/AlertModal/AlertModal';
import VerifyLocation from './VerifyLocation/VerifyLocation';


class AddLocation extends Component {

    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    state = {
        location: {
            country: null,
            city: null
        },
        searchString: null,
        weather: null,
        locationValid: false,
        showResult: false
    }

    timeout = null;

    componentDidMount(){
       
    }

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
            if(this.state.location.city !== ''){
                this.submitHandler();
                this.setState({showResult: true});
            }
        }, 500);
    }

    startedTypingHandler = () => {
        this.setState({showResult: false});
    }

    submitHandler(){
        this.getCurrentWeather();
    }

    saveLocationHandler = () => {
        const location = {...this.state.location};
        const locationToSave = {
            city: location.city,
            country: countries.find((country) => country.name === location.country).code
        }
        this.props.saveLocation(locationToSave);
    }

    async getCurrentWeather(){
        let promise = APIServices.getWeather(this.state.location.city, this.state.location.country, 'metric', this.props.apiKey);
        await promise
        .then((res) => {
            const cleanedRes = APIServices.cleanWeatherData(res); 
            const country = countries.find((country) => country.code === res.sys.country).name;
            const city = res.name;
            this.setState(
                {
                    weather: cleanedRes,
                    locationValid: true,
                    location: {
                        city: city,
                        country: country
                    }
                }
            );
        })
        .catch((err) => {
            this.setState({weather: null, locationValid: false});
        });
    } 

    render(){
        return(
            <AlertModal open={this.props.open} close={this.props.close}>
                <div className={classes.AddLocation}>
                    <h3>Add a new location</h3>
                    <div className={classes.Form}>
                        <div className={classes.FormItem}>
                            <input
                                type='text'
                                ref={this.inputRef}
                                onChange={this.updateCityHandler}
                                onKeyUp={this.stoppedTypingHandler}
                                onKeyDown={this.startedTypingHandler}
                                placeholder='Search...'/>
                        </div>
                    </div>
                    {this.state.showResult ? 
                        this.state.locationValid ? 
                            <VerifyLocation 
                                location={this.state.location}
                                weather={this.state.weather}
                                save={this.saveLocationHandler}
                                cancel={this.props.close}/>
                            : <h3>Location not found</h3>
                        : null
                    }
                </div>
            </AlertModal>
        );
    } 
}

export default AddLocation;