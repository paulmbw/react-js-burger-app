import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients) // returns an array transformedIngredients which contains they object KEYS from props.ingredients i.e. ["bacon", "cheese", "salad"]
	.map(ingredientKey => { // iterate through array keys
		return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
			console.log(...Array(props.ingredients[ingredientKey]));
			return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} /> //create a new BurgerIngredient for each element in ingredients array
		});
	}).reduce((arr, el) => {
		return arr.concat(el)
	}, []);  // calculcate total elements in array

	if(transformedIngredients.length === 0){
		transformedIngredients = <h1>Please start adding ingredients!</h1>
	}
	
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;