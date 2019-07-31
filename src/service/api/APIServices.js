import {BASE_URL} from '../../global/Variables';
import Weather from '../../template/Weather';

const APIServices = {

    getWeather(city, country, units, key){
        const url = `${BASE_URL}weather?q=${city},${country}&units=${units}&APPID=${key}`;
        return(
            fetch(url)
            .then((res) => res.json())
            .catch((err) => err)
        );
    },

    cleanWeatherData(data){
        const cleanedData = new Weather(
            data.weather[0].main,
            data.weather[0].description,
            data.weather[0].icon,
            data.main.temp,
            data.main.pressure,
            data.main.humidity,
            data.wind.speed,
            data.wind.deg,
            data.sys.sunrise,
            data.sys.sunset,
            data.visibility
        );
        return cleanedData;
    }
}

export default APIServices;