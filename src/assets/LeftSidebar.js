import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SvgIcon from './SvgIcon';
import BuyAndRentIcon from '../../static/svg/sell-property.svg';
import NewProjectsIcon from '../../static/svg/building.svg';
import DoorsCertifiedIcon from '../../static/svg/approval.svg';
import CommercialIcon from '../../static/svg/shop.svg';
import ListPropertyIcon from '../../static/svg/cheap.svg';
import MyFavouritesIcon from '../../static/svg/gender-neutral-user.svg';
import SavedSearchesIcon from '../../static/svg/opera-glasses.svg';

export default class LeftSidebar extends Component {

    static propTypes = {
        toggleSideBar: PropTypes.func,
        showSideBar: PropTypes.bool,
        isLoggedIn: PropTypes.string
    }

    render() {
        return (
            <div className={"sidebar-menu-container" + (this.props.showSideBar ? " show" : "")}>
                <div className="side-backdrop" onClick={this.props.toggleSideBar}></div>
                <div className="side-nav-menu left">
                    <div className="nav-items">
                        <div className="nav-item doors-nav">
                            <Link to="/#buy-and-rent" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={BuyAndRentIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Buy & Rent</h4>
                            </Link>
                            <Link to="/#new-projects" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={NewProjectsIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">New Projects</h4>
                            </Link>
                            <Link to="/#doors-certified" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={DoorsCertifiedIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Doors Certified</h4>
                            </Link>
                            <Link to="#/commercial" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={CommercialIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Commercial</h4>
                            </Link>
                            <Link to="#/commercial" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={ListPropertyIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">List Property</h4>
                            </Link>
                        </div>
                        {
                            this.props.isLoggedIn &&
                            <div className="nav-item nav-user-profile">
                                <Link to="/" className="h-flex fs sidebar-item">
                                    <SvgIcon glyph={MyFavouritesIcon} width={'21px'} height={'21px'} />
                                    <h4 className="item">My Favourites</h4>
                                </Link>
                                <Link to="/" className="h-flex fs sidebar-item">
                                    <SvgIcon glyph={SavedSearchesIcon} width={'21px'} height={'21px'} />
                                    <h4 className="item">Saved Searches</h4>
                                </Link>
                            </div>
                        }
                        <div className="nav-item terms-and-conditions">
                            <Link to="/" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={BuyAndRentIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Terms</h4>
                            </Link>
                            <Link to="/" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={BuyAndRentIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Privacy Policy</h4>
                            </Link>
                            <Link to="/" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={BuyAndRentIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Contact Us</h4>
                            </Link>
                            <Link to="/" className="h-flex fs sidebar-item">
                                <SvgIcon glyph={BuyAndRentIcon} width={'21px'} height={'21px'} />
                                <h4 className="item">Feedback</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
