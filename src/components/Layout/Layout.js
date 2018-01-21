import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

// Using a utility or auxillary class is known as a higher order approach. You 
// could have wrapped the below layout in a parent div, but this may affect how
// elements of your page are displayed. Therefore, we use a custom 'Aux' tag

const layout = (props) => (
	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>

		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
);

export default layout;