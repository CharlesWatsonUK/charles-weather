const WeatherAbstractionServices = {

    /*
     *  Highest temperature from a list of Weather objects
     *
     */
    maxTemp(day){
        return Math.max.apply(Math, day.map(forecastTime => forecastTime.temp));
    },

    /*
     *  Lowest temperature from a list of Weather objects
     *
     */
    minTemp(day){
        return Math.min.apply(Math, day.map(forecastTime => forecastTime.temp));
    },

    /*
     *  Most occuring icon type (disregarding day or night - i.e. number bit only)
     *  returned as the day time version 
     */
    modeIcon(day){
        const icons = day.map(forecastTime => forecastTime.iconCode.substring(0,2));
        return this.arrayMode(icons)+'d';
    },

    /*
     *  Highest occruing element in an array (i.e. mode).
     *
     */
    arrayMode(arr){
        // Get object (i.e. map) to keep track of counts
        const arrUnique = [...new Set(arr)];
        const countMap = { };
        arrUnique.forEach(elem => {
            countMap[elem] = 0
        });
        // Count the occurences
        arr.forEach(elem => {
            countMap[elem] ++;
        });
        // Return value (key in map) with highest occurence
        const vals = Object.values(countMap);
        const keys = Object.keys(countMap);
        const idx = vals.indexOf(Math.max(...vals));
        return keys[idx]
    }
}

export default WeatherAbstractionServices;