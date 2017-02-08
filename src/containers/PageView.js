import React from 'react';
import PageHeader from '../presentation/PageHeader';
import PageContent from '../presentation/PageContent';
import Footer from '../presentation/Footer';

export default class PageView extends React.Component {
	render () {
		return (
			<div className="page-view">
				<PageHeader />
				<PageContent/>
				<Footer />
			</div>
		);
	}
}