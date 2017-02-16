import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import SvgIcon from './SvgIcon';
import SmallUser form '../assets/svg/user.svg';
import * as actions from '../actions/authactions';

class SignUp extends Component {

	proptypes = {
		dispatch: PropTypes.func,
		showModal: PropTypes.bool,
		closeModal: PropTypes.bool,
		alreadyHaveAnAccount: PropTypes.func,
		signUpState: PropTypes.object
	}

	constructor(props) {
		super();
		this.state = {
			name:'',
			email:'',
			mobile:'',
			password:'',
			iAgree:false
		};
		this.onNameChange=this.onNameChange.bind(this);
		this.onEmailChange=this.onEmailChange.bind(this);
		this.onMobileChange=this.onMobileChange.bind(this);
		this.onPasswordChange=this.onPasswordChange.bind(this);
		this.onIAgreeCheckChange=this.onIAgreeCheckChange.bind(this);
		this.onHide=this.onHide.bind(this);
		this.alreadyHaveAnAccountClicked=this.alreadyHaveAnAccountClicked.bind(this);
		this.handleSignUpClick=this.handleSignUpClick.bind(this);
	}

	initializeState() {
		this.setState({
			name:'',
			email:'',
			mobile:'',
			password:'',
			iAgree:false
		});
	}

	onNameChange(evt) {
		this.setState({name: this.currentTarget.value});
	}

	onEmailChange(evt) {
		this.setState({email: this.currentTarget.value});
	}

	onMobileChange(evt) {
		this.setState({mobile: this.currentTarget.value});
	}
	onPasswordChange(evt) {
		this.setState({password: this.currentTarget.value});
	}
	onIAgreeCheckChange(evt) {
		this.setState({iAgree: this.currentTarget.value});
	}
	onHide(evt) {
		this.initializeState();
		this.props.closeModal();
	}
	componentWillRecieveProps(NextProps) {
		if
	}

	render() {

		const enableSignUpBtn = this.state.name && this.state.email && this.state.mobile && this.state.password && this.state.iAgree ? true : false;
		return(
			<div>
				<Modal show={this.props.showModal} onHide={this.onHide} className="sign-up-modal">
				{this.state.signUpFailed && <div className="modal-notification"><span className="text">Please try Again</span></div>}
					<Modal.Header>
						<Modal.Title>Sign Up</Modal.Title>
						<h5 className="titl-desc">We need to collect extra informationn about you</h5>
					</Modal.Header>	
					<Modal.Body>
						<div className="form-fields">
							<label htmlFor="name">User Name</label>
							<input type="text" value={this.state.name} tabIndex="1" autoFocus spellCheck="false" className="form-control" placeHolder="Enter Name" onChange={this.onNameChange} />

							<label htmlFor="email">Email</label>
							<input type="text" value={this.state.email} tabIndex="2" autofocus spellCheck="false" className="form-control" placeHolder="Enter email address" onChange={this.onEmailChange} />

							<label htmlFor="mobile">Mobile No.</label> 
							<input type="text" value={this.state.email} tabIndex="3" autofocus spellCheck="false" className="form-control" placeHolder="Enter Mobile Number" onChange={this.onMobileChange} />

							<label htmlFor="password">Password</label> 
							<input type="text" value={this.state.email} tabIndex="3" autofocus spellCheck="false" className="form-control" placeHolder="Enter Password" onChange={this.onPasswordChange} />

							<div className="i-agree-check">
								<input type="checkbox" tabIndex="5" className="check" onChange={this.onIAgreeCheckChange} />
								<span className="text">I agree with Terms & Services</span>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<div className="switch-link">
							<SvgIcon glyph={SmallUser} width={'17px'} height={'21px'} style={{marginRight:"12px"}} />
							<span className="test-link" onClick={this.alreadyHaveAnAccountClicked}>I already have an account</span>
						</div>
						<div className="action-buttons">
							<button type="submit" className="btn btn-secondary cancel" onClick={this.onHide}>Cancel</button>
							<button type="submit" className="btn btn-primary sign-up" tabIndex="6" disabled={ !enableSignupBtn } onClick={this.handleSignUpClick}>Sign Up</button>
						</div>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		signUpState: state.Auth.signUp
	}
}

export	default connect(mapStateToProps)(SignUp);