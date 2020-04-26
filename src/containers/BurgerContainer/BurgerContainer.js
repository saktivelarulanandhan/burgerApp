import React, { Component } from "react";
import classes from '../BurgerContainer/BurgerContainer.module.css';
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Auxilary from "../../hoc/Auxilary";
import Modal from "../../components/UI/Modal/Modal";


class BurgerContainer extends Component {
    constructor(props) {
        super(props);
        this.priceList = {
            salads: 1.0,
            bacon: 0.7,
            meat: 1.8,
            cheese: 0.8,
        }
        this.state = {
            ingredients: {
                salads: 0,
                bacon: 0,
                meat: 0,
                cheese: 0
            },
            btnStatus: {
                salads: { isDisabled: true },
                bacon: { isDisabled: true },
                meat: { isDisabled: true },
                cheese: { isDisabled: true },
            },
            price: 4,
            isPurchasable: false,
            isPurchasing: false,
            isPurchasingClosed: false

        }

    }

    isPurchasableState = (ingredients) => {
        const purchasable = Object.keys(ingredients).map((currKey) => {
            return ingredients[currKey];
        }).reduce((sum, el) => { return sum + el }, 0);
        console.log(purchasable);

        return purchasable;
    }

    isPurchasingHandler = () => {
        const copIingredient = {... this.state };
        copIingredient.isPurchasing = true;
        this.setState(copIingredient);
    }

    isPurchasingClosedHandler = () => {
        this.setState({isPurchasing: false, isPurchasingClosed: true});
    }

    isPurchasingContinueHandler = () => {
        alert("Please proceed with the order");
    }

    addIngredientsHandler = (ingredient) => {
        console.log("You called Add Ingredient Handler" + ingredient);
        const copyIngredientState = { ... this.state };
        copyIngredientState.ingredients[ingredient]++;
        copyIngredientState.price = copyIngredientState.price + this.priceList[ingredient];
        copyIngredientState.btnStatus[ingredient].isDisabled = false;
        copyIngredientState.isPurchasable = this.isPurchasableState(copyIngredientState.ingredients) > 0;
        this.setState(copyIngredientState);

    }

    removeIngredientsHandler = (ingredient) => {
        console.log("You called Remove Ingredient Handler" + ingredient);
        const copyIngredientState = { ... this.state };
        if (this.state.ingredients[ingredient] >= 0) {
            copyIngredientState.ingredients[ingredient]--;
            if (this.state.ingredients[ingredient] === 0) {
                copyIngredientState.btnStatus[ingredient].isDisabled = true;
            }
        }
        copyIngredientState.isPurchasable = this.isPurchasableState(copyIngredientState.ingredients) !== 0;
        this.setState(copyIngredientState);

    }

    render() {
        return (
            <Auxilary>
                <div className={classes.BurgerPos}>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControls
                        isPurchasable={this.state.isPurchasable}
                        price={this.state.price}
                        btnStatus={this.state.btnStatus}
                        addIngredient={this.addIngredientsHandler}
                        removeIngredient={this.removeIngredientsHandler}
                        isPurchasing = {this.isPurchasingHandler}
                    />
                </div>
                <Modal show={this.state.isPurchasing} onClicked={this.isPurchasingClosedHandler}>
                    <OrderSummary  totalPrice={this.state.price} ingredients={this.state.ingredients} isCanceled={this.isPurchasingClosedHandler} isContinued={this.isPurchasingContinueHandler}/>
                </Modal>
            </Auxilary>

        )
    }
}

export default BurgerContainer;