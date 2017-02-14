import React from 'react';
import { Link } from 'react-router';
import SvgIcon from './SvgIcon';
import SavedSearchesIcon from '../assets/svg/opera-glasses.svg';
import MyFavouritesIcon from '../assets/svg/heart-filled.svg';
import Places from '../assets/svg/garden.svg'

export default class SideBar extends React.Component {
	
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
					// this.props.isLoggedIn &&
					<div>
						<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
						    <SvgIcon glyph={MyFavouritesIcon} width={'21px'} height={'21px'} />
						    <h4 className="item">My Favourites</h4>
						</Link>
						<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
						    <SvgIcon glyph={SavedSearchesIcon} width={'21px'} height={'21px'} />
						    <h4 className="item">Save Searches</h4>
						</Link>
					</div>
				}
			</div>
		);
	}
}