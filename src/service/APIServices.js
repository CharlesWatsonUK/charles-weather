import {BASE_URL} from '../static/variables';
import LocalStorageServices from './LocalStorageServices';
import Weather from '../template/Weather';
import Location from '../template/Location';

const APIServices = {

    /*
     * Fetch one weather object, using city and country
     * 
     */
    fetchWeather(location){
        const userState = LocalStorageServices.getUserState();
        const url = `${BASE_URL}weather?q=${location.city},${location.country}&units=${userState.units}&APPID=${userState.apiKey}`;
        return(
            fetch(url)
                .then((res) => res.json().then(data => this.formatWeatherResponse(data)))
                .catch((err) => null)
        );
    },

    /*
     * Fetch a list of weather objects, using location IDs from user state
     * 
     */
    async fetchWeathers(){
        const userState = LocalStorageServices.getUserState();
        const locations = userState.locations;
        let weathers = [];
        await this.asyncForEach(locations, async (location) => {
            const promise = this.fetchWeather(location);
            await promise
                    .then((data) => {weathers.push(data)})
                    .catch((err) => {console.log(err)});
        });
        return weathers;
    },

     /*
     * Fetch a forecast (list of weather objects), using city and country
     * 
     */
    async fetchForecast(location){
        const userState = LocalStorageServices.getUserState();
        const url = `${BASE_URL}forecast?q=${location.city},${location.country}&units=${userState.units}&APPID=${userState.apiKey}`;
        return(
            fetch(url)
                .then((res) => this.formatForecastResponse(res.json()))
                .catch((err) => err)
        );
    },

    /*
     * Format JSON weather response (from 3rd party API) to our template
     * 
     */
    formatWeatherResponse(data){
        return new Weather(
            new Location(data.id, data.name, data.sys.country),
            data.weather[0].main,
            data.weather[0].description,
            data.weather[0].icon,
            data.main.temp,
            data.main.pressure,
            data.main.humidity,
            data.wind.speed,
            data.wind.deg,
            data.dt);
    },

    /*
     * Format JSON forecast response (from 3rd party API) to our template
     * 
     */
    formatForecastResponse(data){
        return data.list.map(elem => new Weather(
                new Location(data.city.id, data.city.name, data.city.country),
                elem.weather[0].main,
                elem.weather[0].description,
                elem.weather[0].icon,
                elem.main.temp,
                data.main.pressure,
                data.main.humidity,
                data.wind.speed,
                data.wind.deg,
                data.dt)
        );
    },

    /*
     * Decide whether to allow an XHR request to 3rd party API to be sent.
     * Throttle requests to 60 a minute - a limitation with the free weather API.
     * 
     */
    affordRequest(){
        const oldUserState = LocalStorageServices.loadUserState();
        const date = new Date();
        const oneMinuteAgo = date.getMilliseconds() - (60 * 1000);
        let newUserState = {...oldUserState};
        let affordRequest = false;
        if(oldUserState.rilm > 60){
            // more than 60 requests on rilm
            if(oldUserState.lrdt < oneMinuteAgo){
                // last request more than a min ago - reset limiter, afford request
                newUserState.rilm = 1;
                newUserState.lrdt = date.getMilliseconds();
                affordRequest = true;
            }else{
                // last request less than a min ago - stop request
                affordRequest = false;
            }
        }else{
            // less than 60 requests on rilm - afford request 
            newUserState.rilm += 1;
            affordRequest = true;
        }
        LocalStorageServices.setUserState(newUserState);
        return affordRequest;
    },

    async asyncForEach(arr, cb){
        for(let idx = 0; idx < arr.length; idx++){
            await cb(arr[idx], idx, arr);
        }
    }
}

export default APIServices;