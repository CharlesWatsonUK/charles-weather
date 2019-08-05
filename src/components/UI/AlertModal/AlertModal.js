import React from 'react';
import classes from './AlertModal.module.scss';

import Backdrop from '../../UI/Backdrop/Backdrop';

const alertModal = (props) => {
    let styleClass;
    if(props.open){
        styleClass = classes.AlertModalOpen;
    }else{
        styleClass = classes.AlertModalClosed;
    }

    return(
        <div>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={[styleClass, props.className].join(' ')}>
                {props.children}
            </div>
        </div>
    );
}

export default alertModal;