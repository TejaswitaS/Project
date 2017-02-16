import React from 'react';
import PageHeader from './PageHeader';
import LeftBar from './LeftBar';
import Footer from './Footer';

export default class Chalal extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sideBarOpen: false};
		this.handleSideBar = this.handleSideBar.bind(this);
	}
	/*getInitialState() {
    return {sidebarOpen: false};
  	}*/
	componentDidMount() {
		let latLng = {
			lat: 32.011739, 
			lng: 77.312053
		};
		let map = new google.maps.Map(this.refs.mapContainer, {
			zoom: 10,
			scrollwheel: false,
			center: latLng
		});
		let marker = new google.maps.Marker({
			position: latLng,
			map: map
		});
	}

	handleSideBar() {
		this.setState(prevState => ({sideBarOpen: !prevState.sideBarOpen}));
	}

	render () {
		return (
			<div className="page-view">
				<PageHeader onClick={this.handleSideBar} />
				<div className="main-content">
					<LeftBar isOpen={this.state.sideBarOpen} toggleSideBar={this.handleSideBar} />

					<div className="map-view-container" ref="mapContainer"></div>
					<div className="flex-container">
						<div className="flex-item">
							<img src="src/assets/images/chalalPlace.jpg" style={{height:"300px", width:"267px"}} />
							<div className="overlay"></div>
							<a href ="#">Read More</a>
						</div>
						<div className="flex-item">
							<img src="src/assets/images/chalalFood.jpg" style={{height:"300px", width:"267px"}} />
							<div className="overlay"></div>
							<a href ="#">Read More</a>
						</div>
						<div className="flex-item">
							<img src="src/assets/images/chalalPlace.jpg" style={{height:"300px", width:"267px"}} />
							<div className="overlay"></div>
							<a href ="#">Read More</a>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}