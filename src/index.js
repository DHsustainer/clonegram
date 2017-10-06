import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyDnQJU9SMHsC1wGEoMRaUBx_p7KQ42XGM4",
    authDomain: "clonegram-60dad.firebaseapp.com",
    databaseURL: "https://clonegram-60dad.firebaseio.com",
    projectId: "clonegram-60dad",
    storageBucket: "clonegram-60dad.appspot.com",
    messagingSenderId: "1000293057099"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
