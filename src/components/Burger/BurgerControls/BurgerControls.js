import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from '../BurgerControls/BurgerControls.module.css';
import { checkPropTypes } from 'prop-types';

const BurgerControls = (props) => {
    const BurgerControls = [
        {
            key: "salads", type: "salads", price:1
        },
        {
            key: "bacon", type: "bacon", price:0.7
        },
        {
            key:"meat", type: "meat", price:1.8
        },
        {
            key:"cheese", type: "cheese", price:0.9
        }
    ]

    console.log(props.isPurchasable);
    return (<div className={classes.BurgerControls}>
            <p> Current Price: <strong> {props.price.toFixed(2)}</strong></p>  
            {              
            BurgerControls.map( (currContol) => {
                return <BurgerControl key={currContol.key}
                label={currContol.type} 
                btnStatus={props.btnStatus}
                addIngredient={(e) => props.addIngredient(currContol.key)}
                removeIngredient={ e => props.removeIngredient(currContol.key)}/>
            })}
            <br />
            <button className={classes.OrderButton} disabled={!props.isPurchasable} onClick={props.isPurchasing}> Checkout</button>
    </div>);
}

export default BurgerControls;