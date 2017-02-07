import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home'
import AboutUs from './containers/AboutUs';
import PageView from './containers/PageView';
import PageContent from './presentation/PageContent';

export default () => {
	return(
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="aboutus" component={ AboutUs } />
			<Route path="pageview" component={ PageView } />
			<Route path="pagecontent" component={ PageContent } />
		</Route>
	);
}
