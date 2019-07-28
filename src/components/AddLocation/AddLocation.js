import React from 'react';
import classes from './AddLocation.module.scss';

import AlertModal from '../UI/AlertModal/AlertModal';

const addLocation = (props) => (
    <AlertModal open={props.open} close={props.close}>
        <div className={classes.AddLocation}>
            <h4>Add a new location</h4>
            <hl/>
            <form className={classes.Form}>
                <div className={classes.FormItem}>
                    <label>City</label>
                    <input type='text'/>
                </div>
                <div className={classes.FormItem}>
                    <label>Country</label>
                    <input type='text'/>
                </div>
            </form>
        </div>
    </AlertModal>
);

export default addLocation;
