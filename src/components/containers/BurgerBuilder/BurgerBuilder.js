import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../../../components/Burger/BuildControls/BuildControls';
import Modal from '../../../components/UI/Modal/Modal';
import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	meat: 3,
	bacon: 2.5,
	cheese: 2,
}

export class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice : 4,
		orderReady: false,
		checkoutReady: false,
		loading: false,
		error: false
	}

	componentDidMount() {
		//usefull for fetching data once a component has been mounted 
		axios.get('ingredients.json')
			 .then(response => {this.setState({ingredients: response.data});
		}).catch(error => this.setState({error: true}));
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
	
	//enables/disables the order now button
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

	updateCheckoutReadyHandler = () => {
		this.setState({checkoutReady : true});
	}

	purchaseCancelHandler = () => {
		this.setState({checkoutReady : false});
	}

	purchaseContinueHandler = () => {
		const queryParams = [];

		for(let i in this.state.ingredients){
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		}); 
	}

	render() {
		let burger = this.state.error ? <h1 style={{textAlign: 'center', color:'red'}}>Failed to load application</h1> : <Spinner />
		let orderSummary = null;

		if(this.state.loading) {
			orderSummary = <Spinner />
		}
		
		if(this.state.ingredients){
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls ingredientAdded={this.addIngredientHandler} 
								   ingredientRemoved={this.removeIngredientHandler}
								   price={this.state.totalPrice}
								   orderReady={this.state.orderReady}
								   ordered={this.updateCheckoutReadyHandler} />
				</Aux>
			);

			orderSummary = <OrderSummary ingredients={this.state.ingredients}
							  purchaseCanceled={this.purchaseCancelHandler}
							  purchaseContinued={this.purchaseContinueHandler} 
							  totalPrice={this.state.totalPrice}/>;
		}

		return (
			<Aux>
				<Modal show={this.state.checkoutReady} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
