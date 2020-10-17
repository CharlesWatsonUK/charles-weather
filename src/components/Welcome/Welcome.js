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
        window.location.replace('/');
    }

    render(){
        return(
            <AlertModal open={this.props.open} className={classes.Modal}>
                <div className={classes.Welcome}>
                    <h3>Welcome</h3>
                    <h4>Follow the steps below to get started...</h4>
                    <ol>    
                        <li>
                            <p>This site uses OpenWeather® as its data source. 
                                To use this site please open the link below to sign up for free.
                                Once you have singed up, go to your acounts page and copy your API key/ token.
                            </p>
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
                    </ol>
                    <Button type='Success' className={classes.Button} clicked={this.submitUser}>I agree</Button>
                </div>
            </AlertModal>
        );
    }
    
}

export default Welcome;