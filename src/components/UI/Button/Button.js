import React from 'react';
import classes from './Button.module.scss';

const button = (props) => (
    <button className={[classes[props.type], props.className].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;
