import React, {Component} from 'react';

import WeatherCards from '../WeatherCards/WeatherCards';
import Toolbar from '../Nav/Toolbar/Toolbar';
import Sidedrawer from '../Nav/Sidedrawer/Sidedrawer';
import AddLocation from '../AddLocation/AddLocation';

class Layout extends Component {
    
    state = {
        sidedrawerOpen: false,
        addLocationOpen: true
    }

    openCloseSidedrawerHandler = () => {
        if(this.state.sidedrawerOpen){
            this.setState({sidedrawerOpen: false});
        }else{
            this.setState({sidedrawerOpen: true});
        }
    }

    openCloseAddLocationHandler = () => {
        if(this.state.addLocationOpen){
            this.setState({addLocationOpen: false});
        }else{
            this.setState({addLocationOpen: true});
        }
    }

    render(){
        return(
            <div>
                <Toolbar openCloseSidedrawer={this.openCloseSidedrawerHandler} addLocation={this.openCloseAddLocationHandler}/>
                <AddLocation open={this.state.addLocationOpen} close={this.openCloseAddLocationHandler}/>
                <Sidedrawer open={this.state.sidedrawerOpen} closeSidedrawer={this.openCloseSidedrawerHandler}/>
                <WeatherCards/>
            </div>
        );
    }

}

export default Layout;
