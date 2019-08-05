import React, {Component} from 'react';
import classes from './Settings.module.scss';
import LocalStorageServices from '../../service/LocalStorageServices';

import AlertModal from '../UI/AlertModal/AlertModal';
import Button from '../UI/Button/Button';

class Settings extends Component {
    
    constructor(props){
        super(props);

        this.state = this.getSettings();
    }

    getSettings = () => {
        const userState = LocalStorageServices.getUserState();
        if(userState !== null){
            return {
                apiKey: userState.apiKey,
                units: userState.units
            };
        }else{
            return {
                apiKey: '',
                units: 'metric'
            }
        }
    }

    apiKeyChangeHandler = (e) => {
        this.setState({apiKey: e.target.value})
    }

    submitUser = () => {
        let userState = LocalStorageServices.getUserState();
        userState.apiKey = this.state.apiKey;
        LocalStorageServices.setUserState(userState);
        this.props.close();
        window.location.replace('/');
    }

    render(){
        return(
            <AlertModal open={this.props.open} close={this.props.close}>
                <div className={classes.Settings}>
                    <h3>Settings</h3>
                    <div className={classes.FormItem}>
                        <p>API Key:</p>
                        <input 
                            value={this.state.apiKey}
                            onChange={e => this.apiKeyChangeHandler(e)}
                            ref={this.apiKeyInputRef}/>
                    </div>
                    <div className={classes.FormItem}>
                        <Button 
                            type='Success' 
                            clicked={this.submitUser}
                            className={classes.Button}>Save</Button>
                        <Button 
                            type='Danger' 
                            clicked={this.props.close}
                            className={classes.Button}>Cancel</Button>
                    </div>
                </div>
            </AlertModal> 
        );
    }
}

export default Settings;