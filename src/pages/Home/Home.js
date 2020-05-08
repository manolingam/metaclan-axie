import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LogoText from '../../assets/logo-text.png';
import AxieLogo from '../../assets/axie-logo.jpg';

import 'bulma';

import './Home.css';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className='home'>
				<a className='logo' href='https://bulma.io'>
					<img src={LogoText} alt='' width='112' height='28' />
				</a>
				<img id='axie-logo' src={AxieLogo} alt='' />

				<div className='contest-links'>
					<button
						className='button beauty-button'
						onClick={() => {
							this.props.history.push('/beauty');
						}}
					>
						Beauty Contest
					</button>
					<button
						className='button ugly-button'
						onClick={() => {
							this.props.history.push('/ugly');
						}}
					>
						Ugly Contest
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Home);
