import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
 return (<button className={[classes.Buttons, classes[props.btnType]].join(" ")} onClick={props.clicked}>{props.children}</button>);

}

export default Button;