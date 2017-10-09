import React, { Component } from 'react';
import firebase from 'firebase';

class FileUpload extends Component {
	constructor() {
		super();
		this.state = {
			uploadValue: 0
		}
	}

	render () {
		return (
			<div>
				<progress value={this.state.uploadValue} max="100"></progress>
			</div>
		)
	}
}

export default FileUpload;