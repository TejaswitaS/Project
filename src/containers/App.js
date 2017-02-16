import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {

	constructor(props) {
		super(props);
		console.log('App mounted');
	}

	render() {
		return (
			<div className="app-container">
				{this.props.children}
			</div>
		);
	}
}