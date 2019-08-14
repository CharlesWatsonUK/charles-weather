const UtilsServices = {

    /*
     *  Takes time value (as numeric) and returns it in 2 digit format (as string). 
     *  e.g. 2 => 02 
     *  e.g. 20 => 20
     */
    formatTimeVal(val){
        if(val < 10){
            return '0'+val;
        }else{
            return val;
        }
    },

    /*
     *  Get the day of the week from the day number (which JS Date gives)
     *
     */
    getDayName(val){
       const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       return(days[val]);
    },

    /*
     *  Pad the array of forecast time data, for when the forecast day does not 
     *  have all forecat times. This helps UX rendering by having constant size arrays of times.
     * 
     */
    padTimesArray(arr){
        if(arr.length === 8){
            return arr;
        }else{
            const padding =  new Array(8 - arr.length).fill(null);
            if(arr[0].dt.getHours() === 1){
                return [...arr, ...padding];
            }else{
                return [...padding, ...arr];
            }
        }
    }
}

export default UtilsServices;