import React from 'react';
import classes from './Sidedrawer.module.scss';

import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
    let styleClass;
    if(props.open){
        styleClass = classes.SideDrawerOpen;
    }else{
        styleClass = classes.SideDrawerClosed;
    }
    
    return(
        <div>
            <Backdrop show={props.open} clicked={props.closeSidedrawer}/>
            <div className={styleClass}>
                <NavItems context='sidedrawer'/>
            </div>
        </div>
    );
}

export default sidedrawer;