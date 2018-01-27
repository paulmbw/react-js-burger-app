import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
// Using a utility or auxillary class is known as a higher order approach. You 
// could have wrapped the below layout in a parent div, but this may affect how
// elements of your page are displayed. Therefore, we use a custom 'Aux' tag

export default class Layout extends Component {
	state = {
		showSidedrawer: false
	}

	//this keyword will refer to this class always!
	sidebarHandler = () => {
		//use prevState, instead of accessing this.state.show. Current stae may be different than what you 
		//expected
		this.setState((prevState) => {
			return {showSidedrawer : !prevState.showSidedrawer}
		});
	}

	render () {
		return (
			<Aux>
				<Toolbar show={this.state.showSidedrawer} slide={this.sidebarHandler} />
				<Sidedrawer open={this.state.showSidedrawer} close={this.sidebarHandler} />
					<main className={classes.Content}>
						{this.props.children}
					</main>
			</Aux>
		);
	}
}






