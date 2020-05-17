import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import MetaContest from './pages/MetaContest/MetaContest';
import EpicFail from './pages/EpicFail/EpicFail';

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
					<Route exact path='/meta' component={MetaContest} />
					<Route exact path='/epicfail' component={EpicFail} />
				</Router>
			</div>
		);
	}
}

export default App;
