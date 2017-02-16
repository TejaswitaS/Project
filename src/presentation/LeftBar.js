import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SvgIcon from './SvgIcon';
import SavedSearchesIcon from '../assets/svg/opera-glasses.svg';
import MyFavouritesIcon from '../assets/svg/heart-filled.svg';
import Places from '../assets/svg/garden.svg'

export default class LeftBar extends React.Component {
	render() {
		var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
		return(
			<div className={sidebarClass}>
				<div>
					<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
					<SvgIcon glyph={Places} width={'21px'} height={'21px'} />
					<span style={{display:"inline-block"}}><h4 className="item">Places</h4></span>
					</Link>
				</div>
				{
				// this.props.isLoggedIn &&
				<div>
					<div>
						<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
						<SvgIcon glyph={MyFavouritesIcon} width={'21px'} height={'21px'} />
						<span style={{display:"inline-block"}}><h4 className="item">My Favourites</h4></span>
						</Link>
					</div>
					<div>
						<Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
						<SvgIcon glyph={SavedSearchesIcon} width={'21px'} height={'21px'} />
						<span style={{display:"inline-block"}}><h4 className="item">Save Searches</h4></span>
						</Link>
					</div>
				</div>
				}
			</div>
		);
	}
}