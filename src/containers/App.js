import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { toggleSideBar } from '../actions/appData';
import Sidebar from '../presentation/Sidebar';

export default class App extends Component {

	static propTypes = {
		children: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.toggleSideBar = this.toggleSideBar.bind(this);
		console.log('App mounted');
	}
	return (
		<div className="app-container">
			{props.children}
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

function mapStateToProps(state) {
    return {
        auth: state.Auth,
        appData: state.AppData
    }
}

export default connect(mapStateToProps)(App);
