import React, { Component } from 'react';
import classes from '../Modal/Modal.module.css';
import Auxilary from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Auxilary>
            <Backdrop show={this.props.show} clicked={this.props.onClicked} />
            <div className={classes.Modal} style={this.props.show ? {
                opacity: 1,
                transform: 'translateY(0vh)'
            } : {
                    opacity: 0,
                    transform: 'translateY(-100vh)'
                }}>
                {this.props.children}
            </div>
        </Auxilary>
        );
    }

}

Modal.propTypes = {
    show: PropTypes.bool.isRequired
}

export default Modal;