import React from 'react';
import { Link } from 'react-router';

export default class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
						<li data-target="#myCarousel" data-slide-to="3"></li>
						<li data-target="#myCarousel" data-slide-to="4"></li>
					</ul>
					<div className="carousel-inner" role="listbox">
						<div className="item active">
							<img src="src/assets/chalal.jpg" style={{width:"1140px", height:"500px"}}alt="chalal" />
						</div>
						<div className="item">
							<img src="src/assets/kasol.jpg" style={{width:"1140px", height:"500px"}}alt="kasol" />
						</div>
						<div className="item">
							<img src="src/assets/tosh.jpg" style={{width:"1140px", height:"500px"}}alt="tosh" />
						</div>
						<div className="item">
							<img src="src/assets/sacred-forest.jpg" style={{width:"1140px", height:"500px"}}alt="sacred forest" />
						</div>
						<div className="item">
							<img src="src/assets/root-bridges.jpg" style={{width:"1140px", height:"500px"}}alt="root bridges" />
						</div>
					</div>
					<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
					    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
				    </a>
				    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
				        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				        <span className="sr-only">Next</span>
				    </a>
				</div>
				<div className="text">
					<div className="chalal">
						<h1><a href="#">CHALAL</a></h1>
						<p>Just about a 25 minute walk up from Kasol lies Chhalal, which isn't much different from it's lower brother but the walk here is perfect for sparking a big one and drawing fairies on the trees. Practise some yoga here to get your zen on....<Link to={`/chalal`}>Read More</Link></p>
					</div>
					<div className="kasol">
						<h1><a href="#">KASOL</a></h1>
						<p>The evergreen haunt of every Indian new to the herb. However much people may say that it's overcrowded and overused, the fact remains that it's got everything a stoner requires a stone's throw(pun intended) away. There's a river, great food, pretty forests and perfect weather....<Link to={'/kasol'}>Read More</Link></p>
					</div>
					<div className="tosh">
						<h1><a href="#">TOSH</a></h1>
						<p>A slow climb through slightly difficult roads will get you to Tosh. Very isolated, greener than imaginable and easy on the pocket. The hotel owners will sort you out with chai, pancakes and the like so you can enjoy your buzz with a full stomach....<Link to={'/tosh'}>Read More</Link></p>
					</div>
					<div className="malana">
						<h1><a href="#">MALANA</a></h1>
						<p>The sheer expanse of this green meadow surrounding a mysterious forest is best enjoyed with something just as mind expanding. The weather is sexy and the surroundings are totally empty, so live free....<Link to={'/malana'}>Read More</Link></p>
					</div>
					<div className="goa">
						<h1><a href="#">GOA</a></h1>
						<p>The walk down to these serene natural beauties is almost too much to handle, and definitely warrants a victory hit. Take a dip in the clean pools and let the purity of nature soak into those weary bones....<Link to={'/goa'}>Read More</Link></p>
					</div>
				</div>
				<div
				  className="fb-like"
				  data-share="true"
				  data-width="450"
				  data-show-faces="true">
				</div>
			</div>
		);
	}
}
