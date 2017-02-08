import React from 'react';

export default class PageContent extends React.Component {
	render() {
		return(
			<div className="main-content">
				<div className="map-view-container"></div>
				<div className="flex-container">
					<div className="flex-item">Flex 1</div>
					<div className="flex-item">Flex 2</div>
					<div className="flex-item">Flex 3</div>
				</div>
				</div>
		);
	}
}