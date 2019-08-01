import React, {Component} from 'react';
import classes from './Welcome.module.scss';

import AlertModal from '../UI/AlertModal/AlertModal';
import Button from '../UI/Button/Button';
import UserState from '../../template/UserState';
import LocalStorageServices from '../../service/LocalStorageServices';

class Welcome extends Component {
    
    constructor(props){
        super(props);

        this.apiKeyInputRef = React.createRef();
        this.unitsInputRef = React.createRef();
    }

    submitUser = () => {
        const userState = new UserState();
        userState.apiKey = this.apiKeyInputRef.current.value;
        LocalStorageServices.setUserState(userState);
        this.props.close();
    }

    render(){
        return(
            <AlertModal open={this.props.open}>
                <div className={classes.Welcome}>
                    <h3>Welcome</h3>
                    <h4>Follow the steps below to get started...</h4>
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <p>This site uses OpenWeather® as its data source. 
                                        To use this site please open the link below to sign up for free.
                                    </p>
                                
                                </li>
                                <li>
                                    <p>
                                        Once you have singed up go to your acounts page, and copy your API token.
                                    </p>
                                </li>
                            </ul>
                            <a href='https://openweathermap.org/appid'>Get an OpenWeather® account</a>
                        </li>
                        <li>
                            <p>Paste your API key here...</p>
                            <input type='text' className={classes.Input} ref={this.apiKeyInputRef}/>
                        </li>
                        {/* <li>
                            <p>Metric or Imperial units?...</p>
                           <fieldset className={classes.RadioGroup} ref={this.unitsInputRef}>
                               <label>Metric <input type='radio' name='units' value='metric'/></label>
                               <label>Imperial <input type='radio' name='units' value='imperial'/></label>
                           </fieldset>
                        </li> */}
                        <li>
                            <p>Agree to the following, and lets go!</p>
                            <p>blah blah blah blah</p>
                        </li>
                    </ul>
                    <Button type='Success' className={classes.Button} clicked={this.submitUser}>I agree</Button>
                </div>
            </AlertModal>
        );
    }
    
}

export default Welcome;