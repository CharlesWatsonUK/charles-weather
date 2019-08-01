import Location from './Location';

class Weather {

    constructor(
        location = new Location(),
        descriptionBrief = '',
        descriptionFull = '',
        iconCode = '',
        temp = 0,
        pressure = 0,
        humidity = 0,
        windSpeed = 0,
        windDirection = 0,
        dt = 0){
            this.location = location;
            this.descriptionBrief = descriptionBrief;
            this.descriptionFull = descriptionFull;
            this.iconCode = iconCode;
            this.temp = temp;
            this.pressure = pressure;
            this.humidity = humidity;
            this.windSpeed = windSpeed;
            this.windDirection = windDirection;
            this.dt = dt;
        } 
}

export default Weather;