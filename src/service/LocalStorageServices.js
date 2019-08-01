import {LOCAL_STORAGE_ID} from '../static/variables';

const LocalStorageServices = {

    /* 
     * Load user state from local storage
     *
     */
    getUserState(){
        const stateStr = localStorage.getItem(LOCAL_STORAGE_ID);
        if(stateStr === null){
            return null;
        }else{
            return JSON.parse(stateStr);
        }
    },

    /* 
     * Set user state to local storage
     *
     */
    setUserState(userState){
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(userState))
    }
}

export default LocalStorageServices;