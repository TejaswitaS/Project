import React from 'react';
import { Link } from 'react-router';
import SavedSearchesIcon from '../assets/opera-glasses.svg';
import MyFavouritesIcon from '../assets/heart-filled.svg';
import Places from '../assets/garden.svg'

export default class SideBar extends React.Component {
	
	static propTypes = {
		toggleSideBar: PropTypes.func,
		showSideBar: PropTypes.bool,
		isLoggedIn: PropTypes.string
	}
	render() {
		return (
			<div className={"sidebar-menu" + (this.props.showSideBar ? " show" : "")}>
				<div className="side-dropback" onClick={this.props.toggleSideBar}></div>
				<div className="navbar-items">
					<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
					    <SvgIcon glyph={Places} width={'21px'} height={'21px'} />
					    <h4 className="item">Places</h4>
					</Link>
					<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
					    <SvgIcon glyph={Places} width={'21px'} height={'21px'} />
					    <h4 className="item">Places</h4>
					</Link>
				</div>
				{
					this.props.isLoggedIn &&
					<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
					    <SvgIcon glyph={MyFavouritesIcon} width={'21px'} height={'21px'} />
					    <h4 className="item">Buy & Rent</h4>
					</Link>
					<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
					    <SvgIcon glyph={SavedSearchesIcon} width={'21px'} height={'21px'} />
					    <h4 className="item">Save Searches</h4>
					</Link>
				}
			</div>
		);
	}
}