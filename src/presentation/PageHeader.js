import React from 'react';
import { NavBar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

export default class PageHeader extends React.Component {
	render () {
		return (
			<div className="content-container" style={{width:"100%"}}>
				<nav className="navbar navbar-default">
					<div className="navbar-brand">
						<div className="hamburger-icon">
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