
import React from 'react';
import classes from '../NavigationItems/Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}> <a href="/">Home</a></li>
            <li className={classes.NavigationItem}> <a href="/">Checkout</a></li>
        </ul>
    )
}

export default Navigation;