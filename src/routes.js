import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Home from './containers/Home'
import AboutUs from './containers/AboutUs';

export default () => {
	return(
		<Route path="/" component={ Home }>
			<Route path="aboutus" component={ AboutUs } />
		</Route>
	);
}
