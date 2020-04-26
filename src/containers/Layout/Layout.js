import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import BurgerContainer from '../BurgerContainer/BurgerContainer';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/sideDrawer/SideDrawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

export class Layout extends Component {
    state = {
        openBackdrop: true,
        openSideDrawer: false
    }

    backDropHandler = () => {
        this.setState ({openBackdrop: false, openSideDrawer: false});
    }

    openMenuHandler = () => {
        this.setState({openBackdrop: true, openSideDrawer: true});
    }

    

    render() {
        return (
            <Auxilary>
                <ToolBar actionHandler = {this.openMenuHandler}/>
                <SideDrawer action={this.state.openSideDrawer?'Open':'Close'}/>
                <Backdrop show={this.state.openBackdrop && this.state.openSideDrawer} clicked={this.backDropHandler} />     
                <BurgerContainer />
            </Auxilary>
        )
    }
}
