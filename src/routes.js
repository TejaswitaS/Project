import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home'
import AboutUs from './containers/AboutUs';
import PageView from './containers/PageView';

export default () => {
	return(
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="aboutus" component={ AboutUs } />
			<Route path="pageview" component={ PageView } />
		</Route>
	);
}
