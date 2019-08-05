import React from 'react';
import classes from './NavItem.module.scss';

import Button from '../../../UI/Button/Button';

const navItem = (props) => {

  let styleClass;
  if(props.context === 'toolbar'){
      styleClass = classes.NavItemToolbar;
  }else{
      styleClass = classes.NavItemSidedrawer;
  }

  return(
    <li className={styleClass} onClick={props.clicked}>
      <Button 
        className={classes.Button}
        type='Transparent'>{props.name}</Button>
    </li>
  );
}

export default navItem;