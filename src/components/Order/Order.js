import React from 'react';
import classes from './Order.css';

const order = (props) => {

	const ingredients = [];

	//transforming array of ingredients to p elements
	for(let key in props.ingredients){
		ingredients.push({
			name: key, 
			amount: props.ingredients[key]
		}
	)};

	const ingredientOutput = ingredients.map(ig => {
		return <p key={ig.name}>{ig.name} : {ig.amount}</p>
	})

	return(
		<div className={classes.Order}>
		{ingredientOutput}
			<span>Price: <strong>£{props.price}</strong></span>
		</div>
	)
};

export default order;
		