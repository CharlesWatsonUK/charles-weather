import React, {Component} from 'react';
import WeatherCards from '../WeatherCards/WeatherCards';

class Layout extends Component {
    
    render(){
        return(
            <div>
                Nav
                <WeatherCards/>
            </div>
        );
    }

}

export default Layout;
