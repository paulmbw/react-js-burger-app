import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {

	// something has changed or has been updated, therefore I need to re-render the screen!
	componentWillUpdate(){
		console.log('Re-rendering [OrderSummary] as data has been updated')
	}
	
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(ingredientKey => {
			return (
				<li key={ingredientKey}>
					<span style={{textTransform: 'capatalize'}}>
						{ingredientKey}
					</span> : {this.props.ingredients[ingredientKey]}
				</li>
			);
		});

		return (
			<Aux>
				<h3>Your Order</h3>
				<p>Your ingredients are:</p>
				<ul>	
					{ingredientSummary}
				</ul>
				<p><strong>Total Price : £{this.props.totalPrice.toFixed(2)}</strong></p>
				<p>Checkout?</p>
				<Button buttonType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
				<Button buttonType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
			</Aux>
		)
	}
};

