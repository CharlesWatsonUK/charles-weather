import React from 'react';
import classes from './Toolbar.module.scss';

import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <i onClick={props.openCloseSidedrawer} className={['fas fa-bars', classes.MobileMenuBtn].join(' ')}></i>
        <nav className={classes.ToolbarOptions}>
            <NavItems context='toolbar' addLocation={props.addLocation}/>
        </nav>
    </div>
);

export default toolbar;