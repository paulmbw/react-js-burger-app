import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from '../../Burger/Burger';

import BuildControls from '../../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	meat: 3,
	bacon: 2.5,
	cheese: 2,
}

export class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			meat: 0,
			bacon: 0,
			cheese: 0,
		},
		totalPrice : 4,
		orderReady: false
	}

	addIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] + 1;

		//state should be changed in an immutable way, therefore, create a copy of the state
		const updatedIngredients = {
			...this.state.ingredients
		}

		updatedIngredients[type] = updatedCount;

		const totalCost = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({
			totalPrice : totalCost,
			ingredients : updatedIngredients
		});

		this.updateOrderReadyState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		if(this.state.ingredients[type] > 0){
			const updatedCount = this.state.ingredients[type] - 1;

				const updatedIngredients = {
				...this.state.ingredients
			}

			updatedIngredients[type] = updatedCount;

			const totalCost = this.state.totalPrice - INGREDIENT_PRICES[type];

			this.setState({
				totalPrice : totalCost,
				ingredients : updatedIngredients
			});
			this.updateOrderReadyState(updatedIngredients);
		} else {
			<h1>There is nothing to remove!</h1>
		}
	}

	updateOrderReadyState(ingredients) {
		const sum = Object.keys(ingredients)
		.map(ingredientKey => {
			return ingredients[ingredientKey]
		})
		.reduce((sum, el) => {
			return sum + el;
		}, 0);
		this.setState({
			orderReady : sum > 0
		});
	}

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls ingredientAdded={this.addIngredientHandler} 
							   ingredientRemoved={this.removeIngredientHandler}
							   price={this.state.totalPrice}
							   orderReady={this.state.orderReady}
							   	/>

			</Aux>
		);
	}
}

export default BurgerBuilder;
