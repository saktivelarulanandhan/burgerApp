import React from 'react';
import Navigation from '../NavigationItems/Navigation';
import Logo from '../Logo/Logo';
import classes from '../sideDrawer/SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary';

const SideDrawer = (props) => {
    let actClasses = [classes.SideDrawer, classes[props['action']]];
    return (
        <Auxilary>           
        
         <div className = {actClasses.join(' ')}> 
            
            <Logo height="17%"/>
            <nav>           
                <Navigation />
            </nav>
        </div>
        </Auxilary>
       

    );
}

export default SideDrawer;