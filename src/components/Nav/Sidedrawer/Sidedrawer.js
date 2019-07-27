import React from 'react';
import classes from './Sidedrawer.module.scss';

import NavItems from '../NavItems/NavItems';

const sidedrawer = (props) => {
    let styleClass;
    if(props.open){
        styleClass = classes.SideDrawerOpen;
    }else{
        styleClass = classes.SideDrawerClosed;
    }
    
    return(
        <div className={styleClass}>
            <NavItems context='sidedrawer'/>
        </div>
    );
}

export default sidedrawer;