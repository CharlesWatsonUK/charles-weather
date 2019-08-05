import React from 'react';
import classes from './ProcessingModal.module.scss';

const processingModal = (props) => (
    <div className={classes.Wrapper}>
        <div className={[classes.Spinner, props.className].join(' ')}></div>
        <p>Loading</p>
    </div>    
    
);

export default processingModal;
