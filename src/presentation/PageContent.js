import React from 'react';

export default class PageContent extends React.Component {

	componentDidMount() {
		let latLng = {
			lat: parseFloat(this.props.query.lat),
			lng: parseFloat(this.props.query.lng)
		};
		let map = new google.maps.Map(this.refs.mapContainer, {
			zoom: 16,
			scrollwheel: false,
			center: latLng
		});
		let marker = new google.maps.Marker({
			position: latLng,
			map: map
		});
	}

	render() {
		return(
			<div className="main-content">
				<div className="map-view-container" ref="mapContainer"></div>
				<div className="flex-container">
					<div className="flex-item">Flex 1</div>
					<div className="flex-item">Flex 2</div>
					<div className="flex-item">Flex 3</div>
				</div>
				</div>
		);
	}
}