import React from 'react';
import classes from './Toolbar.module.scss';

import NavItems from '../NavItems/NavItems';
import { tsPropertySignature } from '@babel/types';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <i onClick={props.openCloseSidedrawer} className={['fas fa-bars', classes.MobileMenuBtn].join(' ')}></i>
        <nav className={classes.ToolbarOptions}>
            <NavItems context='toolbar'/>
        </nav>
    </div>
);

export default toolbar;