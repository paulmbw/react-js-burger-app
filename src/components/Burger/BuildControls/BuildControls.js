import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{label : 'Salad', type : 'salad'},
	{label : 'Bacon', type : 'bacon'},
	{label : 'Cheese', type : 'cheese'},
	{label : 'Meat', type : 'meat'},
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<h1>Current Price: £{props.price.toFixed(2)}</h1>
		{controls.map(control => (
			<BuildControl 
				key={control.label} 
				label={control.label} 
				added={() => props.ingredientAdded(control.type)}
				removed={() => props.ingredientRemoved(control.type)}
			/>
		))}
		<button className={classes.OrderButton}
				disabled={!props.orderReady}>Order Now!</button>
	</div>
);

export default buildControls; 	