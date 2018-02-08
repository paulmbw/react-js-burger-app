import React, { Component } from 'react';

import Button from '../../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../../axios-orders';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input'

export class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			postCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Postcode'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your email'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options:[
						{value: 'ASAP', displayValue: 'ASAP'},
						{value: 'Take your time', displayValue: 'Take your time'}
					]
				},
				value: ''
			}
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for(let formElementIdentifier in this.state.orderForm){
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
		}

		this.setState({loading: true});
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			order: formData
			
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

	validateFieldsHandler = (value, rule) => {
		let isValid = false;
		if(rule.required){
			isValid = value.trim() != '';
		}
		return isValid
	}

	inputChangedHandler = (event, inputIdentifier) => {
		/*
		ALWAYS UPDATE THE STATE IN AN IMMUTALE MANNER:
		make a copy of the orderForm object 
		*/
		const orderFormCopy = {
			...this.state.orderForm
		}

		 /*
		 make a copy of the inner object of orderForm e.g. name, email etc. This is passed as inputIdentifier param, so 
		 for example inputChangedHandler(event, 'name') or inputChangedHandler(event, 'email')
		 */
		const orderFormCopyElememnt = {
			...orderFormCopy[inputIdentifier]
		}
		/*
		So, if, for example, 'name' was passed as a parameter, orderFormCopyElememnt will be this
		orderFormCopyElememnt = {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your name'
				},
				value: ''
			}
		}
		*/

		orderFormCopyElememnt.value = event.target.value;
		orderFormCopyElememnt.valid = this.validateFieldsHandler(orderFormCopyElememnt.value, orderFormCopyElememnt.validation);
		orderFormCopy[inputIdentifier] = orderFormCopyElememnt;
		this.setState({orderForm: orderFormCopy});
	}

	render() {
		const formElementsArray = [];
		for(let key in this.state.orderForm){
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let form = (
			<form onSubmit={this.orderHandler}>
			{
				formElementsArray.map(formElement => (
					<Input key={formElement.id}
						   elementType={formElement.config.elementType}
						   elementConfig={formElement.config.elementConfig}
						   value={formElement.config.value}
						   changed={(event) => this.inputChangedHandler(event, formElement.id)} />
				))

			}
					<Button buttonType="Success">Order</Button>
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
