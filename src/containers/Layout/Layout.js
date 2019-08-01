import React, {Component} from 'react';
import LocalStorageServices from '../../service/LocalStorageServices';

import Locations from '../Locations/Locations';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';
import Sidedrawer from '../../components/Nav/Sidedrawer/Sidedrawer';
import Welcome from '../../components/Welcome/Welcome';

class Layout extends Component {
    
    state = {
        sidedrawerOpen: false,
        addLocationOpen: false,
        welcomeOpen: false,
        userHasState: false
    }
 
    componentDidMount(){
       this.checkUserState();
    }

    checkUserState(){
        if(LocalStorageServices.getUserState() === null){
            this.setState({welcomeOpen: true});
        }else{
            this.setState({userHasState: true});
        }
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

    closeWelcomeHandler = () => {
        this.setState({
            welcomeOpen: false,
            userHasState: true});
    }

    render(){
        return(
            <div>
                <Toolbar 
                    openCloseSidedrawer={this.openCloseSidedrawerHandler}
                />
                <Welcome
                    open={this.state.welcomeOpen}
                    close={this.closeWelcomeHandler}/>
                <Sidedrawer 
                    open={this.state.sidedrawerOpen}
                    close={this.openCloseSidedrawerHandler}
                />
                {this.state.userHasState ? <Locations/> : null}
            </div>
        );
    }
}

export default Layout;