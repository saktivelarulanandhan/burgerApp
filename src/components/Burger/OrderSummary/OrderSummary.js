import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Buttons/Button';

const OrderSummary = (props) => {

    const listofIngredients = Object.keys(props.ingredients).map((currKey) => {
        return <li key={currKey}>{currKey} : {props.ingredients[currKey]}</li>;
    })

    return (
        <Auxilary>
            <h3>Your Order:</h3>
            <p>A Delicious Burger with following ingredients: </p>
            <ul>
                {listofIngredients}
            </ul>
            <p>Continue to checkout? </p>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.isCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.isContinued}>Continue</Button>
        </Auxilary>
    );

}

export default OrderSummary;