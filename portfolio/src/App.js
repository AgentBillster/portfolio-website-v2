import { Loading } from './components/Loading';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	// fake authentication Promise
	// authenticate() {
	// 	return new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
	// }

	componentDidMount() {
		
			const ele = document.getElementById('ipl-progress-indicator');

			if (ele) {
				// fade out
				ele.classList.add('available');
				setTimeout(() => {
					// remove from DOM
					ele.outerHTML = '';
				}, );
			}
		};
	

	render() {
		return (
			<div className='steak'>
				<Loading />
			</div>
		);
	}
}

export default App;
