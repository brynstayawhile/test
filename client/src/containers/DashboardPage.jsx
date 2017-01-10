import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPad extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			secretData: ''
		};
	}

	ComponentDidMount() {
		const xhr = new XHMLHttpRequest();
		xhr.open('get', '/api/dashboard');
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
		xhr.responseType = 'json';
		xhr.addEventListener('load', () => {
			if(xhr.status === 200) {
				this.setState({
					secretData: xhr.response.message
				});
			}
		});
		xhr.send();
	}

	render() {
		return (<Dashboard secretData={this.state.secretData} />);
	}
}