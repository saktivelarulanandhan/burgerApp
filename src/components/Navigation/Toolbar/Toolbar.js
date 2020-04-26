import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../NavigationItems/Navigation';

const ToolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <div onClick={props.actionHandler} className={classes.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo height="90%" />
            <nav className={classes.desktopOnly}>
                <Navigation></Navigation>
            </nav>
        </header>
    );
}

export default ToolBar;