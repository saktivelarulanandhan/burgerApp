import React from 'react';
import BurgerLogo from '../../../assets/images/logo.png';
import classes from '../Logo/Logo.module.css';


const Logo = (props) => {
    return (
        <div className={classes.BurgerLogo} style={{ height: props.height }}>
            <img src={BurgerLogo} alt="Happy_Buger_Logo" />
        </div>
    );
}

export default Logo;