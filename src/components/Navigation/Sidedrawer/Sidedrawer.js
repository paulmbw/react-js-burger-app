import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidedrawer = (props) => {
	let attachedClassses = [classes.Sidedrawer, classes.Closed];

	if(props.open){
		attachedClassses = [classes.Sidedrawer, classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.close}/>
			<div className={attachedClassses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>

				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
}

export default sidedrawer;
		