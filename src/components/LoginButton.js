import React, { Component } from 'react';
import firebase from 'firebase';

class LoginButton extends Component {
	constructor () {
	    super();
	    this.state = {
	      user: null
	    };

	    this._handleAuth = this._handleAuth.bind(this);
	    this.renderLoginButton = this.renderLoginButton.bind(this);
  	}

  	componentWillMount () {
  		firebase.auth().onAuthStateChanged(user => {
  		  this.setState({
  		    user:user
  		  });
  		});
  	}

	_handleAuth () {
		
	  const provider = new firebase.auth.GoogleAuthProvider();

	  firebase.auth().signInWithPopup(provider)
	    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
	    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
	}

	renderLoginButton () {
		// Si el usuario está logueado
		if (this.state.user) {
			return (
			  <div>
			    <img class="circle img-responsive z-depth-2" src={this.state.user.photoURL} alt={this.state.user.displayName} />
			    <h5>Bienvenido</h5>
			    <p>{this.state.user.displayName}</p>
			    <button class="waves-effect waves-light red btn-large" onClick={this.handleLogout}>Cerrar Sesión</button>
			  </div>
			);
		}else{
			// Si no está logueado
			return (
				<button class="waves-effect waves-light btn-large" onClick={this._handleAuth}>Login con Google</button>
			)
		}
	}
}

export default LoginButton;