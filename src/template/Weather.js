class Weather {

    constructor(
        descriptionBrief = '',
        descriptionFull = '',
        iconCode = '',
        temp = '',
        pressure = '',
        humidity = '',
        windSpeed = '',
        windDirection = '',
        sunrise = '',
        sunset = '',
        visibility = ''){
            this.descriptionBrief = descriptionBrief;
            this.descriptionFull = descriptionFull;
            this.iconCode = iconCode;
            this.temp = temp;
            this.pressure = pressure;
            this.humidity = humidity;
            this.windSpeed = windSpeed;
            this.windDirection = windDirection;
            this.sunrise = sunrise;
            this.sunset = sunset;
            this.visibility = visibility
        } 
}

export default Weather;