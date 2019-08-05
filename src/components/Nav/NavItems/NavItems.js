import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.scss';

const navItems = (props) => {
    
    let styleClass;
    if(props.context === 'toolbar'){
        styleClass = classes.NavItemsToolbar;
    }else{
        styleClass = classes.NavItemsSidedrawer;
    }

    return(
        <ul className={styleClass}>
            <NavItem 
                name='Settings'
                context={props.context}
                clicked={props.settingsClicked}/>
            <NavItem name='About' context={props.context}/>
        </ul>
    );
}

export default navItems;
