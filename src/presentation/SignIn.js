import React from 'react';
import { Modal } from 'react-bootstarp';

export default class SignIn extends React.Component {
	render() {
		return(
			<div>
				<Modal className="sign-in-modal">
					<Modal.Header>
						<Modal.Title>Sign In</Modal.Title>
						<h5 className="title-desc">If you are already our member please sign in</h5>
				    </Modal.Header>
				    <Modal.Body>
				    	<div className="form-fields">
				    		<input type="text" value="" tabIndex="1" className="form-control" placeholder="Email or Phone Number" />
				    		<input type="password" value="" tabIndex="2" className="form-control" placeholder="Password" />
				    		<span className="forgot-password">Forgotten Password</span>
			    		</div>
		    		</Modal.Body>
		    		<Modal.Footer>
		    			<div className="switch-link">
		    				<span className="text link">Sign up as a new user</span>
	    				</div>
	    				<div className="action-button">
		    				<button className="btn btn-secondary cancel"></button>
		    				<button type="submit" className="btn btn-primary sign-in" tabIndex="3"></button>
	    				</div>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}






