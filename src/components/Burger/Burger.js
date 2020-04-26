import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from '../Burger/Burger.module.css';

const Burger = (props) => {
    console.log(props.ingredients);
    const formIngredient = Object.keys(props.ingredients).map( (igKey) => {
        return Array(props.ingredients[igKey]).fill('').map( (_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}/>;
        });
    }).reduce( (prevArr, currArr) => {
        return prevArr.concat(currArr);
    }, []);

    console.log(formIngredient);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='breadTop' />
            {formIngredient.length === 0 ? <p>Please add Ingredients</p> : formIngredient}            
            <BurgerIngredient type='breadBottom' />
        </div>
    );
}

export default Burger;