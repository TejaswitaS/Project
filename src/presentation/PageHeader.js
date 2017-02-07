import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { NavBar, Nav, NavItem } from 'react-bootstrap';

export default class PageHeader extends React.Component {
	render () {
		return (
			<div className="container">
				<div className="page-header">
					<div className="left-header h-flex">
						<div className="v-flex hamburger-icon">
							<span className="icon"></span>
							<span className="icon"></span>
							<span className="icon"></span>
						</div>
						<h1 className="title">Trippy Hippy</h1>
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">Home</a></li>
						<li><a href="#">About Us</a></li>
					</div>
					<div className="right-header h-flex">
						<div className="user-profile-picture"></div>
					</div>
				</div>
			</div>
		);
	}
}