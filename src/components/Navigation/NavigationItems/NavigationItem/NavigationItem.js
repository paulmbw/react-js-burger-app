import React from 'react';

import classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
	<li className={classes.NavigationItem}>
		<NavLink to={props.link} activeStyle={{color: '#40a4c8'}} exact={props.exact}>{props.children}</NavLink>
	</li>
);

export default navigationItem;
		