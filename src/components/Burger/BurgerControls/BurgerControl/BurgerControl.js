import React from 'react';
import classes from './BurgerControl.module.css';
 
const BurgerControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button className={classes.Less} disabled={props.btnStatus[props.label].isDisabled} onClick={props.removeIngredient}>Less</button>
            <button className={classes.More} onClick={props.addIngredient}>More</button>
        </div>
    );
}

export default BurgerControl;