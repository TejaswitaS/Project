import React from 'react';
import { NavBar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class PageHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="content-container" style={{width:"100%", position:"absolute"}}>
				<nav className="navbar navbar-default">
					<div className="navbar-brand">
						<div className="hamburger-icon" onClick={this.props.onClick}>
							<span className="icon"></span>
							<span className="icon"></span>
							<span className="icon"></span>
						</div>
						<h3 style={{display:"inline"}}>Trippy Hippy</h3>
					</div>
					<div className="nav navbar-nav" style={{display:"inline", float:"right"}}>
						<li className="active"><a href="#">Home</a></li>
						<li><Link to="#">About Us</Link></li>
						<li><Link to="#">Sign Out</Link></li>
					</div>
				</nav>
			</div>
		);
	}
}
