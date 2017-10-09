import React, { Component } from 'react';
import firebase from 'firebase';

class LogoutButton extends Component {
	constructor () {
		super();
		this.state = {
	    	user: null
	  	};
	  	
	  	this.handleLogout = this._handleLogout.bind(this);
	}

	componentWillMount (){
	  firebase.auth().onAuthStateChanged(user => {
	    this.setState({
	      user
	    });
	  });
	}

	_handleLogout () {
	  firebase.auth().signOut()
	    .then(result => console.log(`${result.user.email} ha cerrado sesión`))
	    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
	}

	render() {
		return (
			<button onClick={this._handleLogout}>Cerrar Sesion</button>
		)
	}
}

export default LogoutButton;