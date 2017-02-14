import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { toggleSideBar } from '../actions/appData';
import Sidebar from '../presentation/Sidebar';

class App extends Component {

	constructor(props) {
		super(props);
		this.toggleSideBar = this.toggleSideBar.bind(this);
		console.log('App mounted');
	}

	toggleSideBar() {
		this.props.dispatch(toggleSideBar(false));
	}

	render() {
		return (
			<div className="app-container">
				{this.props.children}
				<ReactCSSTransitionGroup transitionName="sidebar-menu-container" transitionEnterTimeout={300} transitionLeaveTimeout={100}>
					{this.props.appData.showSidebar &&
						<Sidebar
							toggleSideBar={this.toggleSideBar}
							showSideBar={this.props.appData.showSidebar}
							isLoggedIn={this.props.auth.token}
						/>
					}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        auth: state.Auth,
        appData: state.AppData
    }
}

export default connect(mapStateToProps)(App);
