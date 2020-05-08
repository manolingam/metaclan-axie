import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Beauty from './pages/Beauty/Beauty';
import Ugly from './pages/Ugly/Ugly';

import LogoText from './assets/logo-text.png';

import './App.css';

class App extends Component {
	state = {};
	render() {
		return (
			<div className='App'>
				<a
					className='logo'
					href='https://www.metaclan.games/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={LogoText} alt='' />
				</a>
				<Router>
					<Route exact path='/' component={Home} />
					<Route exact path='/beauty' component={Beauty} />
					<Route exact path='/ugly' component={Ugly} />
				</Router>
			</div>
		);
	}
}

export default App;
