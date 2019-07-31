import React from 'react';
import classes from './Welcome.module.scss';

import AlertModal from '../UI/AlertModal/AlertModal';
import Button from '../UI/Button/Button';

const welcome = (props) => (
    <AlertModal open={props.open} close={props.close}>
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
                    <input type='text' className={classes.Input} onChange={e => props.keyChange(e)}/>
                </li>
                <li>
                    <p>Agree to the following, and lets go!</p>
                    <p>blah blah blah blah</p>
                </li>
            </ul>
            <Button type='Success' className={classes.Button} clicked={props.submit}>I agree</Button>
        </div>
    </AlertModal>
);

export default welcome;