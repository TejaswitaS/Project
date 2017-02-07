import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { NavBar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header-container">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Trippy Hippy</a>
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Places</a></li>
							<li><a href="#">Places</a></li>
							<li className="search-container">
								<input className="search-input" type="text" name="search" placeholder="Search.."></input>
								<img src='src/assets/search.jpeg' className="search-image"/>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}		