import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home'
import AboutUs from './containers/AboutUs';
import Chalal from './presentation/Chalal';
import Kasol from './presentation/Kasol';
import Tosh from './presentation/Tosh';
import Malana from './presentation/Malana.js';
import Goa from './presentation/Goa';


export default () => {
	return(
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="aboutus" component={ AboutUs } />
			<Route path="chalal" component={ Chalal } />
			<Route path="kasol" component={ Kasol } />
			<Route path="tosh" component={ Tosh } />
			<Route path="malana" component={ Malana } />
			<Route path="goa" component={ Goa } />
		</Route>
	);
}
