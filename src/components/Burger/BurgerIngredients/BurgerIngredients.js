import React from 'react';
import classes from '../BurgerIngredients/BurgerIngredients.module.css'

import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case 'breadBottom': 
            ingredient =  <div className={classes.BreadBottom}></div>
            break;
        case 'breadTop': 
            ingredient = <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;
        case 'meat': 
            ingredient = <div className={classes.Meat}></div>
            break;
        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>
            break;
        case 'salads':
            ingredient = <div className={classes.Salad}></div>
            break;
        case 'bacon': 
            ingredient = <div className={classes.Bacon}></div>
            break;
        }
    
    return (
       ingredient
    );
}

BurgerIngredient.propsTypes = {
    types: PropTypes.string.isRequired
}

export default BurgerIngredient;