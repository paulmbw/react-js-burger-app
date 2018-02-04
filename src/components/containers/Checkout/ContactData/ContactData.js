import React, { Component } from 'react';

import Button from '../../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../../axios-orders';
import Spinner from '../../../../components/UI/Spinner/Spinner';

export class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postCode: ''
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();

		this.setState({loading: true});
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Paul Waweru',
				address: {
					street: 'London Street',
					postCode: '23424',
					country: 'England'
				},
				email: 'pwaweru@test.com'
			}
		}

		axios.post('/orders.json', order)
			 .then(response => {
			 	this.setState({loading: false});
			 	alert('Your order was placed successfully');
			 	this.props.history.push('/');
			 })
			 .catch(response => {
			 	this.setState({loading: false});
		});
	}

	render() {
		let form = (
			<form action="">
					<input type="text" name="name" placeholder="Your name"/>
					<input type="email" name="email" placeholder="Your email"/>
					<input type="text" name="street" placeholder="Your street"/>
					<input type="text" name="postCode" placeholder="Your postCode"/>
					<Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
				</form>
		);

		if(this.state.loading) {
			form = <Spinner />
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter your contact details</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
