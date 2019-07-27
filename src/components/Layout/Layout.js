import React, {Component} from 'react';

import WeatherCards from '../WeatherCards/WeatherCards';
import Toolbar from '../Nav/Toolbar/Toolbar';
import Sidedrawer from '../Nav/Sidedrawer/Sidedrawer';

class Layout extends Component {
    
    state = {
        sidedrawerOpen: false
    }

    openCloseSidedrawerHandler = () => {
        if(this.state.sidedrawerOpen){
            this.setState({sidedrawerOpen: false});
        }else{
            this.setState({sidedrawerOpen: true});
        }
    }

    
    render(){
        return(
            <div>
                <Toolbar openCloseSidedrawer={this.openCloseSidedrawerHandler}/>
                <Sidedrawer open={this.state.sidedrawerOpen}/>
                <WeatherCards/>
            </div>
        );
    }

}

export default Layout;
