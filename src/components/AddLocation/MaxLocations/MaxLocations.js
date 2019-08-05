import React from 'react';
import classes from './MaxLocations.module.scss';

import AlertModal from '../../UI/AlertModal/AlertModal';
import Button from '../../UI/Button/Button';


const maxLocations = (props) => (
    <AlertModal 
        open={props.open}
        close={props.close}
        className={classes.Modal}>
        <div className={classes.MaxLocations}>
            <h3>Max number of locations reached!</h3>
            <p>Too add a new location please delete one of you existing locations.</p>
            <Button 
                type={'Neutral'}
                clicked={props.close}
                className={classes.Button}>OK</Button>
        </div>
    </AlertModal>
);

export default maxLocations;