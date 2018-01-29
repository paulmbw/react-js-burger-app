import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from './../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component {
	
	// This method allows your Component to exit the Update life cycle if there is no reason to apply a new render
	shouldComponentUpdate(nextProps, nextState){
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}
	
	// something has changed or has been updated, therefore I need to re-render the screen!
	componentWillUpdate() {
		console.log('Re-rendering [Modal] as data has been updated')
	}

	render() {
		return(
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div 
				className={classes.Modal}
				style={{
					transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: this.props.show ? '1' : '0'
				}}>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}