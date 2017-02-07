import React from 'react';
import Header from '../presentation/Header';
import Content from '../presentation/Content';
import Footer from '../presentation/Footer';

export default class Home extends React.Component {
	render() {
		return(
			<div className="main-page">
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}
