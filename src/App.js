import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/containers/Checkout/Checkout';
import Orders from './components/containers/Orders/Orders';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
        		<Layout>
        		<Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" component={BurgerBuilder} />
        		</Switch>
        		</Layout>
      		</div>
      </BrowserRouter>
    );
  }
}

export default App;
