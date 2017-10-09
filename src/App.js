import React, { Component } from 'react';
import firebase from 'firebase';
import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogoutButton";
import FileUpload from "./components/FileUpload";
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this._handleAuth.bind(this);
    this.handleLogout = this._handleLogout.bind(this);
  }

  componentWillMount (){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      });
    });
  }

  _handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  _handleLogout () {

    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  renderLoginButton () {
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
      return (
        <button class="waves-effect waves-light red btn-large" onClick={this.handleAuth}>Login con Google</button>
      )
    }
  }

  render() {
    return (
      <div class="login">
        <nav class="grey darken-4">
          <div class="nav-wrapper">
            <a href="javascript:;" class="brand-logo center">Clonegram</a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="card-panel center-align">
              { this.renderLoginButton() }
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
