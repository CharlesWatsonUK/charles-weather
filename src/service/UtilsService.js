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
    }
}

export default UtilsServices;