import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { NavBar, Nav, NavItem } from 'react-bootstrap';
// import SignIn from './presentation/SignIn';

// const createHandlers = function(dispatch) {
// 	const signInClicked =  function(data) {
// 		dispatch(actions.signIn(data));
// 	};
// 	return{
// 		signInClicked
// 	};
// }

export default class Header extends React.Component {

// 	static propTypes = {
// 		dispatch: PropTypes.func
// 	}
// 	constructor(props){
// 		super(props);
// 		this.clickHandlers = createHandlers(this.props.dispatch);
// 		this.state = {
// 			showSignIn: false;
// 		};
// 		this.openSignInModal = this.openSignInModal.bind(this);
// 	}

// 	openSignInModal() {
// 		this.setState({ showSignIn: true });
// 	}

	constructor(props) {
		super(props);
		this.checkLoginState = this.checkLoginState.bind(this);
		this.statusChangeCallback = this.statusChangeCallback.bind(this);
		window.fbAsyncInit = function() {
			FB.init({
				appId      : '1262754500513919',
				xfbml      : true,
				version    : 'v2.8'
			});
			FB.AppEvents.logPageView();
		};
	}

	userLoggedIn() {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function(response) {
			console.log('Successful login for: ' + response.name);
			//document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
		});
	}

	statusChangeCallback(response) {
		console.log('statusChangeCallback');
		console.log(response);
		if (response.status === 'connected') {
			console.log("User logged in");
			this.userLoggedIn();
		} else if (response.status === 'not_authorized') {
			console.log("Not authorized");
			//document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
		} else {
			console.log("Not logged into facebook");
		}
	}

	checkLoginState() {
		FB.getLoginStatus(function(response) {
			this.statusChangeCallback(response);
		});
	}

	onSignInClick(data) {
		this.props.dispatch(actions.signIn(data));
	}

	render() {
		return (
			<div className="header-container">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="hamburger-icon" style={{marginTop:"20px"}}>
							<span className="icon"></span>
							<span className="icon"></span>
							<span className="icon"></span>
						</div>
						<a className="navbar-brand" href="#">Trippy Hippy</a>
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Sign In</a></li>
							<li><a href="#">Sign Up</a></li>
							<li className="fb-login-button" scope="public_profile,email"  data-max-rows="1" data-size="medium" data-show-faces="true" data-auto-logout-link="true" onClick={this.checkLoginState} style={{marginTop:"12px"}} style={{marginTop:"12px"}}></li>
							<li className="search-container">
								<input className="search-input" type="text" name="search" placeholder="Search.."></input>
								<img src='src/assets/images/search.png' className="search-image"/>
							</li>
							{ this.state.showSignIn && <SignIn onSignInClick={this.onSignInClick} /> }
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}		