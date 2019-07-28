import React from 'react';
import classes from './NavItem.module.scss';

const navItem = (props) => {

  let styleClass;
  if(props.context === 'toolbar'){
      styleClass = classes.NavItemToolbar;
  }else{
      styleClass = classes.NavItemSidedrawer;
  }

  return(
    <li className={styleClass} onClick={props.clicked}>
      <a className={classes.Link}>{props.name}</a>
    </li>
  );
}

export default navItem;