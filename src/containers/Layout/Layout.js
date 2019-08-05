import React, {Component} from 'react';
import LocalStorageServices from '../../service/LocalStorageServices';

import Locations from '../Locations/Locations';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';
import Sidedrawer from '../../components/Nav/Sidedrawer/Sidedrawer';
import Welcome from '../../components/Welcome/Welcome';
import Settings from '../../components/Settings/Settings';

class Layout extends Component {
    
    state = {
        sidedrawerOpen: false,
        welcomeOpen: false,
        userHasState: false,
        settingsOpen: false
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

    openCloseSettingsHanlder = () => {
        if(this.state.settingsOpen){
            this.setState({settingsOpen: false});
        }else{
            this.setState({
                settingsOpen: true,
                sidedrawerOpen: false
            });
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
                    settingsClicked={this.openCloseSettingsHanlder}
                />
                <Welcome
                    open={this.state.welcomeOpen}
                    close={this.closeWelcomeHandler}/>
                <Sidedrawer 
                    open={this.state.sidedrawerOpen}
                    close={this.openCloseSidedrawerHandler}
                    settingsClicked={this.openCloseSettingsHanlder}
                />
                <Settings
                    open={this.state.settingsOpen}
                    close={this.openCloseSettingsHanlder}/>
                {this.state.userHasState ? <Locations/> : null}
            </div>
        );
    }
}

export default Layout;