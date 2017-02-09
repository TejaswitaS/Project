import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';

export default class Chalal extends React.Component {
	componentDidMount() {
		let latLng = {
			lat: 32.016063, 
			lng: 77.451467
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

	render () {
		return (
			<div className="page-view">
				<PageHeader />
				<div className="main-content">
					<div className="map-view-container" ref="mapContainer"></div>
					<div className="flex-container">
						<div className="flex-item">
							<img src="src/assets/chalalPlace.jpg" style={{height:"300px", width:"267px"}} />
							<div className="overlay"></div>
							<a href ="#">Read More</a>
						</div>
						<div className="flex-item">
							<img src="src/assets/chalalFood.jpg" style={{height:"300px", width:"267px"}} />
							<div className="overlay"></div>
							<a href ="#">Read More</a>
						</div>
						<div className="flex-item">
							<img src="src/assets/chalalPlace.jpg" style={{height:"300px", width:"267px"}} />
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