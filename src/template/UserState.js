class UserState {
    constructor(
        apiKey = '',
        units = 'metric',
        locations = [],
        rilm = 0,
        lrdt = new Date()
    ){
        this.apiKey = apiKey;
        this.units = units;
        this.locations = locations;
        this.rilm = rilm;
        this.lrdt = lrdt;
    }
}

export default UserState;